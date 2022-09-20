import Link from "next/link";
import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import Image from "next/image";

const FeaturedProducts = ({ products }) => {
  const { addItemToheckout, openCart } = useContext(ShopContext);
  return (
    <div className="featured-produts">
      <h2>Featured Products</h2>
      <div className="grid">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <a>
              <div className="card">
                <Image
                  src={product.images[0].src}
                  width="300px"
                  height="300px"
                  alt={product.title}
                />
                <div className="title">{product.title}</div>
                <div className="details">
                  <div className="price">₦{product.variants[0].price}</div>
                  <button
                    onClick={() => {
                      addItemToheckout(product.variants[0].id, 1);
                      openCart();
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default FeaturedProducts;