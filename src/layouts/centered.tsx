import { View } from "components";
import type { LayoutProps } from "components/types";
import type { FC } from "react";
import React from "react";

const Centered: FC<LayoutProps> = ({ children }) => (
  <View
    data-layout="centered"
    className="w-full h-screen flex items-center justify-center bg-gray-50"
  >
    {children}
  </View>
);

export default Centered;
