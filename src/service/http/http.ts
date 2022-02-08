import axios from "axios";
import { Constants } from "config/Constants";
import { notificationService } from "service/NotificationService";
import {
  HttpEventListener,
  HttpInstance,
  HttpRequestConfig,
  HttpResponse,
  Notification,
  NotificationType
} from "service/types";
import { ObjectUtils } from "utils/ObjectUtils";
import { offlineService } from "service/TogglerService";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common[Constants.CONTENT_TYPE] = "application/json";
axios.defaults.headers.common[
  "X-Timezone-Offset"
] = `${new Date().getTimezoneOffset()}`;

export class HttpService {
  instance: HttpInstance;
  private authorization?: string = "";
  constructor(baseURL = "", options = {}) {
    const timeout = 60000;
    this.instance = axios.create({ baseURL, timeout, ...options });
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSessionExpired = this.handleSessionExpired.bind(this);
  }
  useCredentials(token: string) {
    this.authorization = token;
  }
  clearCredentials() {
    this.authorization = undefined;
  }

  get<T = any, R = HttpResponse<T>>(
    url: string,
    params = {},
    config: HttpRequestConfig = {}
  ): Promise<R> {
    return this.request({ params, url, ...config });
  }

  post<T = any, R = HttpResponse<T>>(
    url: string,
    data = {},
    config: HttpRequestConfig = {}
  ): Promise<R> {
    return this.request({ data, url, ...config, method: "post" });
  }
  put<T = any, R = HttpResponse<T>>(
    url: string,
    data = {},
    config: HttpRequestConfig = {}
  ): Promise<R> {
    return this.request({ data, url, ...config, method: "put" });
  }
  delete(url: string, params = {}, config: HttpRequestConfig = {}) {
    return this.request({ params, url, ...config, method: "delete" });
  }

  postFormData<T = any, R = HttpResponse<T>>(
    url: string,
    data = {},
    config: HttpRequestConfig = {}
  ): Promise<R> {
    return this.request({
      data,
      url,
      ...config,
      method: "post",
      headers: HttpService.appendHeaders(config, {
        [Constants.CONTENT_TYPE]: Constants.MULTIPART_FORM_DATA,
      }),
    });
  }
  putFormData<T = any, R = HttpResponse<T>>(
    url: string,
    data = {},
    config: HttpRequestConfig = {}
  ): Promise<R> {
    return this.request({
      data,
      url,
      ...config,
      method: "put",
      headers: HttpService.appendHeaders(config, {
        [Constants.CONTENT_TYPE]: Constants.MULTIPART_FORM_DATA,
      }),
    });
  }

  request<T = any, R = HttpResponse<T>, D = any>(config: HttpRequestConfig<D>): Promise<R> {
    let c = config;
    c = this.enhanceHeaders(c);
    c = this.handleFormData(c);
    //@ts-ignore
    return this.instance
      .request(c)
      .then((response) => onResponseSuccess(response, this.handleMessage))
      .catch((error) =>
        onResponseError(error, {
          onMessage: this.handleMessage,
          onSessionExpired: this.handleSessionExpired,
        })
      );
  }
  private handleMessage(notification: Notification) {
    notificationService.next(notification);
    // // console.log(responseMessage);
    // try {
    //   this.getListenersByType(responseMessage.type).forEach(
    //     (listener: HttpEventListener) => {
    //       listener(responseMessage);
    //     }
    //   );
    // } catch (error) {
    //   console.warn("Erreur listeners : ", error);
    // }
  }
  private handleSessionExpired(notification: Notification) {
    if (this.authorization) {
      notificationService.next(notification);
    }
    this.clearCredentials();
    //TODO continue session management
  }
  private enhanceHeaders(config: HttpRequestConfig): HttpRequestConfig {
    const agent = {
      p: "WEB",
      //   os: Device.osName,
      //   osv: Device.osVersion,
      //   dn: Device.deviceName,
      //   brand: Device.brand,
      //   model: Device.modelName,
      //   memory: Device.totalMemory,
      v: "0.0.1",
    };
    return {
      ...config,
      headers: HttpService.appendHeaders(config, {
        From: `TODO unique id`,
        Agent: JSON.stringify(agent),
        Authorization: this.authorization,
      }),
    };
  }
  private handleFormData<D = any>(config: HttpRequestConfig<D>): HttpRequestConfig<D> {
    return onRequestSuccess(config);
  }

  static appendHeaders<D = any>(config: HttpRequestConfig<D> = {}, newHeaders = {}) {
    const { headers = {} } = config;
    return Object.assign({}, headers, newHeaders);
  }
  static getHeaderValue<D = any>(config: HttpRequestConfig<D> = {}, key: string) {
    const { headers = {} } = config;
    return headers[key];
  }
}

function onRequestSuccess<D = any>(config: HttpRequestConfig<D>): HttpRequestConfig<D> {
  try {
    let { data, headers = {} } = config;
    const contentType = headers[Constants.CONTENT_TYPE] || "";
    if (
      typeof contentType === "string" &&
      contentType.toLowerCase().includes(Constants.MULTIPART_FORM_DATA) &&
      !(data instanceof FormData)
    ) {
      const newData = ObjectUtils.objectToFormData(data);
      const newHeaders = ObjectUtils.omit(headers, [Constants.CONTENT_TYPE]);
      //@ts-ignore
      return { ...config, headers: newHeaders, data: newData };
    }
  } catch (error) {
    console.warn("Interceptors onRequestSuccess Error : ", error);
  }
  return config;
};

const onResponseSuccess = <T = any>(
  response: HttpResponse<T>,
  onMessage?: HttpEventListener
): HttpResponse<T> => {
  let { data, config, request, ...resp } = response;
  // Handle success message
  let meta = config?.meta || {};
  // console.log("msg ? ", meta);
  if (meta && !meta.ignoreSuccessMessage) {
    //@ts-ignore
    let message = meta.successMessage || data?.message;
    if (message && onMessage) {
      onMessage({
        type: NotificationType.SUCCESS,
        message,
      });
    }
  }
  offlineService.next(false);
  //@ts-ignore
  data = data?.data || data;
  return {
    ...resp,
    data,
  };
};

const onResponseError = (
  err: any,
  {
    onMessage,
    onSessionExpired,
  }: { onMessage?: HttpEventListener; onSessionExpired?: HttpEventListener }
) => {
  console.warn("HTTP Error : ");
  const errString = JSON.stringify(err, undefined, 2);
  console.warn(errString);
  const handleErrorMessage = (errorMessage: Notification) => {
    if (errorMessage.message && onMessage) {
      onMessage(errorMessage);
    }
    return Promise.reject(errorMessage);
  };
  if (!err) {
    return handleErrorMessage({
      type: NotificationType.ERROR,
      message: Constants.UNKNOWN_ERROR,
    });
  }
  if (err.message?.indexOf(Constants.NETWORK_ERROR) != -1) {
    return handleErrorMessage({
      type: NotificationType.OFFLINE,
      status: 599,
      message: offlineService.next(true) ? Constants.NETWORK_ERROR : undefined,
    });
  }
  const status = err.status || err.response?.status || 0;
  if (status === 403) {
    const errorMessage = {
      type: NotificationType.SESSION_EXPIRED,
      status,
      message: Constants.SESSION_EXPIRED,
    };
    onSessionExpired?.(errorMessage);
    return Promise.reject(errorMessage);
  }
  const { config = {}, ...error } = err;
  const { meta = {} } = config;
  // console.log("error ? ?? ", error);
  if (!meta.ignoreErrorMessage) {
    const message =
      meta.errorMessage ||
      err?.response?.data?.message ||
      err?.response?.message ||
      err.message ||
      err?.response?.data;
    if (message) {
      return handleErrorMessage({
        type: NotificationType.ERROR,
        status,
        message,
      });
    }
  }
  return Promise.reject(error);
};
