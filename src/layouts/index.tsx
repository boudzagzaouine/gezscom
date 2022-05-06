import type { LayoutProps } from "widgets/types";
import Centered from "layouts/centered";
import Main from "layouts/main";
import React, { FC, Fragment } from "react";

const layouts = {
    main: Main,
    centered: Centered,
    empty: Fragment
};

const Layout: FC<LayoutProps> = ({ name, ...props }) => {
    const Container = layouts[name || 'main'];
    return <Container {...props} />
//   if (name === "empty") {
//     return <Fragment {...props} />;
//   } else if (name === "centered") {
//     return <Centered {...props} />;
//   } else {
//     return <Main {...props} />;
//   }
};

export default Layout;
