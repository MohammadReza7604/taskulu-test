import { ConfigProvider } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import "../styles/globals.css";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import { Router } from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider direction="rtl" locale={fa_IR}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
