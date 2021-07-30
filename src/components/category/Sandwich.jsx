import React from "react";
import SandwichData from "../../data/SandwichData.js";
import MenuItem from "../MenuItem";
const Sandwich = ({ menuItems, setMenuItems, setTotalPrice, totalPrice }) => {
  return (
    <>
      {SandwichData.map((item) => (
        <MenuItem
          id={item.id}
          menuItems={menuItems}
          setMenuItems={setMenuItems}
          name={item.name}
          price={item.price}
          img={item.img}
          setTotalPrice={setTotalPrice}
          totalPrice={totalPrice}
        />
      ))}
    </>
  );
};

export default Sandwich;
