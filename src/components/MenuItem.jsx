import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../styles/menuItem.scss";

const MenuItem = ({
  id,
  menuItems,
  setMenuItems,
  name,
  price,
  img,
  setTotalPrice,
  totalPrice,
}) => {
  const [itemNumber, setItemNumber] = useState(0);

  console.log(menuItems);
  const handlePlus = () => {
    let objIndex = menuItems.findIndex((obj) => obj.id === id);
    let newItem = [...menuItems];
    let object = {
      id: id,
      name: name,
      numberOfPlates: itemNumber + 1,
      price: price,
    };
    newItem[objIndex] = object;
    setMenuItems(newItem);
    setItemNumber(itemNumber + 1);
    setTotalPrice(totalPrice + Number(price) * itemNumber);
  };

  function handleDeleteClick(id) {
    const removeItem = menuItems.filter((menuItem) => {
      return menuItem.id !== id;
    });
    setItemNumber(0);
    setMenuItems(removeItem);
  }
  const handleMinus = () => {
    if (itemNumber === 1) {
      handleDeleteClick(id);
    } else {
      let objIndex = menuItems.findIndex((obj) => obj.id === id);
      let newItem = [...menuItems];
      let object = {
        id: id,
        name: name,
        numberOfPlates: itemNumber - 1,
        price: price,
      };
      newItem[objIndex] = object;
      setMenuItems(newItem);
      setItemNumber(itemNumber - 1);
      setTotalPrice(totalPrice - Number(price));
    }
  };

  const handlePlusButton = () => {
    setItemNumber(1);
    setMenuItems([
      ...menuItems,
      { id: id, name: name, numberOfPlates: 1, price: price },
    ]);
    setTotalPrice(totalPrice + Number(price));
  };
  console.log(itemNumber);
  return (
    <div className="menuitems">
      {/* <img className="menuitems__img" src={img} alt="" /> */}
      <LazyLoadImage
        className="menuitems__img"
        src={img}
        effect="blur" // use normal <img> attributes as props
      />
      <h3 className="menuitems__h3">{name}</h3>
      {itemNumber > 0 ? (
        <div className="menuitems__button2">
          <button className="menuitems__button3" onClick={handleMinus}>
            <img
              alt=""
              className="menuitems__img2"
              src="https://img.icons8.com/material-outlined/24/000000/minus.png"
            />
          </button>
          <h2> {itemNumber}</h2>
          <button className="menuitems__button4" onClick={handlePlus}>
            <img
              alt=""
              className="menuitems__img3"
              src="https://img.icons8.com/android/24/000000/plus.png"
            />
          </button>
        </div>
      ) : (
        <button className="menuitems__img4" onClick={handlePlusButton}>
          <img
            alt=""
            src="https://img.icons8.com/material-rounded/48/000000/plus--v2.png"
          />
        </button>
      )}
    </div>
  );
};

export default MenuItem;
