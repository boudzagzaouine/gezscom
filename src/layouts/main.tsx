import { MenuBar } from "components/header/MenuBar";
import { Link } from "components/Link";
import { LayoutProps } from "components/types";
import { View } from "components/View";
import { FC } from "react";

const Main: FC<LayoutProps> = ({ children }) => {
  return (
    <View>
      <View id="wrapper" className="is-collapse">
        {/* Header */}
        <View as="header">
          <View className="header_wrap">
            <View className="header_inner mcontainer">
              <View className="left_side">
                <View id="logo">
                  <Link href="/">
                    <img src="/images/logo.png" alt="" />
                    <img
                      src="/images/logo-mobile.png"
                      className="logo_mobile"
                      alt=""
                    />
                  </Link>
                </View>
              </View>
              {/* menu bar */}
              <MenuBar />
              {/* <Profile /> */}
            </View>
          </View>
        </View>
        {/* Main Contents */}
        <View className="main_content lg:mr-20">
          <View className="mcontainer">{children}</View>
        </View>
      </View>
    </View>
  );
};

export default Main;
