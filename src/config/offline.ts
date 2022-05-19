import { api } from "service/http";
import type { HttpRequestConfig } from "service/types";
//
const effect = (effect: HttpRequestConfig, action: any) => {
  let draft = effect;
  if (action?.payload !== undefined && action?.payload !== null) {
    draft = {
      data: action.payload,
      ...draft,
    };
  }
  return api.request(draft);
};
const discard = (error: any, _action: any, _retries: any) => {
  const status = error?.status || error?.response?.status || 503;
  return 400 <= status && status < 500;
};
const customOfflineConfig = { effect, discard };
export default customOfflineConfig;
