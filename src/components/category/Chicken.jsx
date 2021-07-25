import React from "react";
import ChickenCategoryData from "../../data/ChickenCategory.js";
import MenuItem from "../MenuItem";
const Chicken = ({ menuItems, setMenuItems }) => {
  return (
    <>
      {ChickenCategoryData.map((item) => (
        <MenuItem
          id={item.id}
          menuItems={menuItems}
          setMenuItems={setMenuItems}
          name={item.name}
          price={item.price}
          
        />
      ))}
    </>
  );
};

export default Chicken;
