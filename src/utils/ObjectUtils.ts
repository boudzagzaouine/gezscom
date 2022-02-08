import _ from "lodash";
import { ObjectIterator } from "utils/types";

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
  static forEach(object: any = {}, callback: ObjectIterator) {
    // Object.keys(object).forEach((key) => {
    //   callback?.(object[key], key);
    // });

    for (const [key, value] of Object.entries(object)) {
      callback?.(value, key);
    }
  }
  static objectToFormData(
    obj: any,
    form?: FormData,
    namespace?: string
  ): FormData {
    const fd = form ?? new FormData();
    let formKey;
    ObjectUtils.forEach(obj, (value, property) => {
      if (namespace) {
        formKey = namespace + "[" + property + "]";
      } else {
        formKey = property;
      }
      // if the property is an object, but not a File, use recursivity.
      if (typeof value === "object" && !(value instanceof File)) {
        ObjectUtils.objectToFormData(value, fd, property);
      } else {
        // if it's a string or a File object
        fd.append(formKey, value);
      }
    });
    return fd;
  }
  static omit<T extends object>(object: T, paths: string[]) {
    return _.omit(object, paths);
  }
}
