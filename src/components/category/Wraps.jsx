import React from "react";
import WrapData from "../../data/WrapData.js";
import MenuItem from "../MenuItem";
const Wrap = ({ menuItems, setMenuItems }) => {
    console.log(WrapData);
  return (
    <>
      {WrapData.map((item) => (
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

export default Wrap;
