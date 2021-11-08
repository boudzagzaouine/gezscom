import { createNextState } from "@reduxjs/toolkit";

export class ImmutabilityUtils {
  static produce = createNextState;
}
