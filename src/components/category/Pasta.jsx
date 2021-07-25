import React from "react";
import PastaData from "../../data/PastaData.js";
import MenuItem from "../MenuItem";
const Pasta = ({ menuItems, setMenuItems }) => {
    console.log(PastaData);
  return (
    <>
      {PastaData.map((item) => (
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

export default Pasta;
