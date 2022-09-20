import Client from "shopify-buy";
export const client = Client.buildClient({
  // storefrontAccessToken: process.env.SHOPIFY_STORE_FRONT_ACCCESS_TOKEN,
  // domain: process.env.SHOPIFY_STORE_DOMAIN

  storefrontAccessToken: "fd5577cf811388f9f7489428cbf05004",
  domain: "sandbox-01-moissanite-outlet.myshopify.com"
})