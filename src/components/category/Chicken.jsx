import React from "react";
import ChickenCategoryData from "../../data/ChickenCategory.js";
import MenuItem from "../MenuItem";
const Chicken = ({ menuItems, setMenuItems, setTotalPrice, totalPrice }) => {
  return (
    <>
      {ChickenCategoryData.map((item) => (
        <MenuItem
          id={item.id}
          menuItems={menuItems}
          setMenuItems={setMenuItems}
          name={item.name}
          price={item.price}
          setTotalPrice={setTotalPrice}
          totalPrice={totalPrice}
          
        />
      ))}
    </>
  );
};

export default Chicken;
