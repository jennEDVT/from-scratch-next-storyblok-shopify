import React, { useContext } from "react";
import Link from "next/link";
import { ShopContext } from "../../context/shopContext";

const Header = () => {
  const { openCart } = useContext(ShopContext);
  return (
    <header className="header">
      <Link href="/">
        <a className="logo">FurniShop</a>
      </Link>
      <button onClick={() => openCart()}>
        Cart

      </button>
    </header>
  );
};
export default Header;