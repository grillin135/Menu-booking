import React from "react";
import ShakesData from "../../data/ShakesData.js";
import MenuItem from "../MenuItem";
const Shake = ({ menuItems, setMenuItems, setTotalPrice, totalPrice }) => {
  return (
    <>
      {ShakesData.map((item) => (
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

export default Shake;
