import React from "react";
import SandwichData from "../../data/SandwichData.js";
import MenuItem from "../MenuItem";
const Sandwich = ({ menuItems, setMenuItems }) => {
    console.log(SandwichData);
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
        />
      ))}
    </>
  );
};

export default Sandwich;
