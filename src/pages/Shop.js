import React from "react";
import { ShopList } from "../helpers/ShopList";
import ShopItem from "../components/ShopItem";
import "../styles/Shop.css";

function Shop() {
  return (
    <div className="shop">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shop</title>
        <link rel="canonical" href="https://ehchadservices.com" />
      </Helmet>
      <h1 className="shopTitle">Not Actually A Shop</h1>
      <div className="shopList">
        {ShopList.map((shopItem, key) => {
          return (
            <ShopItem
              key={key}
              image={shopItem.image}
              name={shopItem.name}
              price={shopItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Shop;