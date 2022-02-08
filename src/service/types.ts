import { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";
import { ExtendableProps } from "utils/types";

interface HttpMeta {
  successMessage?: string;
  ignoreSuccessMessage?: boolean;
  errorMessage?: string;
  ignoreErrorMessage?: boolean;
}

export interface HttpInstance extends AxiosInstance {}
export interface HttpRequestConfig<D = any> extends AxiosRequestConfig<D> {
  meta?: HttpMeta;
}

export type HttpResponse<T = any, D = any> = ExtendableProps<
  AxiosResponse<T, D>,
  {
    config?: HttpRequestConfig<D>;
  }
>;

export type HttpEventListener = (responseMessage: Notification) => void;

export enum NotificationType {
  SUCCESS = "success",
  ERROR = "error",
  SESSION_EXPIRED = "session_expired",
  OFFLINE = "offline",
}
export interface Notification {
  type: NotificationType;
  message?: string;
  status?: number;
}
