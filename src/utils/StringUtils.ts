import { nanoid } from "@reduxjs/toolkit";

export class StringUtils {
  static equalsIgnoreCase(value1: string, value2: string): boolean {
    return value1?.toUpperCase() === value2?.toUpperCase();
  }
  static uniqueId(): string {
    return nanoid();
  }
}
