import { Text, View } from "components";
import { Header } from "components/header";
import { LayoutProps } from "components/types";
import { FC } from "react";

const Main: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <View className="min-h-full">
        <View as="header" className="bg-white shadow">
          <View className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <Text as="h1" className="text-3xl font-bold text-gray-900">
              Dashboard
            </Text>
          </View>
        </View>
        <View as="main">
          <View className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </View>
        </View>
      </View>
    </>
  );
};

export default Main;
