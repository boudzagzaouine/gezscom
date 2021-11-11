import _ from "lodash";

export class ObjectUtils {
  static isPromise(obj: any): boolean {
    return (
      !!obj &&
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj.then === "function"
    );
  }
  static isFunction(obj: any): obj is Function {
    return _.isFunction(obj);
  }
}
