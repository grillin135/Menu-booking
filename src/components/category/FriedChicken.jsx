import React from "react";
import FriedChickenData from "../../data/FriedChickenData.js";
import MenuItem from "../MenuItem";
const FriedChicken = ({ menuItems, setMenuItems }) => {
    console.log(FriedChickenData);
  return (
    <>
      {FriedChickenData.map((item) => (
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

export default FriedChicken;
