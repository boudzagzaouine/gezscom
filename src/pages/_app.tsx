import { Head } from "components";
import { Notifications } from "components/Notifications";
import store, { persistor } from "config/store";
import Layout from "layouts";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import type { FC } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  console.log('comp ', Component);
  console.log('page props : ', pageProps);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <meta name="description" content="Description" />
            <meta name="keywords" content="Keywords" />
            <title>BOOWME</title>

            <link rel="manifest" href="/manifest.json" />
            <link
              href="/icons/favicon-16x16.png"
              rel="icon"
              type="image/png"
              sizes="16x16"
            />
            <link
              href="/icons/favicon-32x32.png"
              rel="icon"
              type="image/png"
              sizes="32x32"
            />
            <link rel="apple-touch-icon" href="/apple-icon.png"></link>
            <meta name="theme-color" content="#317EFB" />
          </Head>
          <Layout name={pageProps.layout}>
            <Notifications />
            <Component {...pageProps} />
          </Layout>
        </>
      </PersistGate>
    </Provider>
  );
};

export default appWithTranslation(App);
