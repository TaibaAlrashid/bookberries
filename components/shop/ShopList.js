import React from "react";
import { observer } from "mobx-react";
import shopStore from "../../stores/shopStore";
import { List, Spinner } from "native-base";
import ShopItem from "./ShopItem";

const ShopList = () => {
  if (shopStore.loading) return <Spinner />;
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop.id} />
  ));

  return (
    <>
      <List>{shopList}</List>
    </>
  );
};

export default observer(ShopList);
