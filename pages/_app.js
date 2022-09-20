import '../styles/globals.css'

import ShopProvider from "../context/shopContext";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Cart from "../src/components/Cart";

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
  return (
    <ShopProvider>
      <Header />
      <Cart />
      <Component {...pageProps} />
      <Footer />
    </ShopProvider>
  )
}

export default MyApp
