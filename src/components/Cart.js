import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import Image from "next/image";

const Cart = () => {
  const { isCartOpen, checkout, closeCart } = useContext(ShopContext);
  return (
    <div className={isCartOpen ? "cart active" : "cart"}>
      <div onClick={() => closeCart()} className="overlay" />
      <div className="side-content">
        <div className="cart-content-container">
          {checkout.lineItems &&
            checkout.lineItems.map((item) => (
              <div key={item.id}>
                <Image
                  width={300}
                  height={300}
                  src={item.variant.image.src}
                  alt={item.title}
                />
                <div className="item-content">
                  <div className="title">{item.title}</div>
                  <div className="quantity">{item.quantity}</div>
                  <div className="details-con">
                    <div className="price">₦{item.variant.price}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <a href={checkout.webUrl}>checkout</a>
      </div>
    </div>
  );
};
export default Cart;