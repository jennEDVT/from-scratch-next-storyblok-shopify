import '../styles/globals.css'

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/Page";
import H1 from "../components/H1";

const components = {
  h1: H1,
  page: Page
};

storyblokInit({
  accessToken: "SBBLt9jDAlkvwXYddzKjYgtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
