import React, { useContext } from "react";
import { useRouter } from "next/router";
import { client } from "../../utils/shopifyStore";
import { ShopContext } from "../../context/shopContext";
import Image from "next/image";

const SingleProduct = ({ product }) => {
  const router = useRouter();
  const { addItemTocheckout, openCart } = useContext(ShopContext);
  if (router.isFallback) {
    return <div>Loading....</div>;
  }
  return (
    <>
      <div className="single-product">
        <Image
          src={product.images[0].src}
          width="300px"
          height="300px"
          alt={product.title}
        />
        <div className="content">
          <div className="details">
            <div className="price">₦{product.variants[0].price}</div>
          </div>
          <div className="title">{product.title}</div>
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          />
          <div className="details">
            <div className="price">₦{product.variants[0].price}</div>
            <button
              onClick={() => {
                addItemTocheckout(product.variants[0].id, 1);
                openCart();
              }}
            >
              Add To Cart
            </button>
          </div>
         </div>
      </div>
    </>
  );
};
export async function getStaticPaths() {
  let products = await client.product.fetchAll();
  products = JSON.parse(JSON.stringify(products));
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const product = await client.product.fetch(params.id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
};