import React, { useState } from "react";

import firebase from "firebase";
import db from "../../firebase";
import "../../styles/menuPage.scss";
import Nav from "../../components/Nav";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import All from "../../components/category/All";

import Burger from "../../components/category/Burger";
import Sandwich from "../../components/category/Sandwich";
import Pasta from "../../components/category/Pasta";
import Pizza from "../../components/category/Pizza";
import FriedChicken from "../../components/category/FriedChicken";
import Wraps from "../../components/category/Wraps";
import Footlongs from "../../components/category/Footlongs";
import Drawer from "react-bottom-drawer";

import pizza from "../../assets/pizza.svg";
import burger from "../../assets/burger.svg";
import pasta from "../../assets/pasta.svg";
import wrap from "../../assets/wrap.svg";
import shake from "../../assets/shake.svg";
import sandwich from "../../assets/sandwich.svg";
import friedchicken from "../../assets/friedchicken.svg";
import footlong from "../../assets/footlong.svg";
import all from "../../assets/all.svg";
import Group9 from "../../assets/Group9.svg";
import cart from "../../assets/cart.svg";
import cart2 from "../../assets/cart2.svg";
import cart3 from "../../assets/cart3.svg";

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '30rem',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

  },
};

export const HomePage = ({ menuItems, setMenuItems }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("all");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [errorname, setErrorName] = useState(false);
  const [errorContact, setErrorContact] = useState(false);
  const [errorAddress, setErrorAddress] = useState(false);
  const [cart, setcart] = useState(false);
  const [isVisible, setIsVisible] = React.useState(!true);
  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload(false);
  };
  const handleClickError = () => {
    setError(true);
  };

  const handleCloseError = () => {
    setError(false);
  };
  const handleClickErrorName = () => {
    setErrorName(true);
  };

  const handleCloseErrorName = () => {
    setErrorName(false);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleClickContactError = () => {
    setErrorContact(true);
  };
  const handleClickAddressError = () => {
    setErrorAddress(true);
  };

  const handleClickContactErrorClose = () => {
    setErrorContact(false);
  };
  const handleClickAddressErrorClose = () => {
    setErrorAddress(false);
  };
  const handleCart = () => {
    setcart(true);
  };

  const handleCartClick = () => {
    setcart(false);
  };
  const submitOrder = () => {
    db.collection("home-delivery")
      .add({
        order: menuItems,
        username: name,
        contact: contact,
        address: address,
        completed: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })

      .then(() => handleClickOpen());
  };

  const checkMenu = (event) => {
    event.preventDefault();
    if (menuItems.length === 0) {
      // alert("Add any meal.");
      handleClickError();
    } else if (name === "") {
      // alert("Please enter your name.");
      handleClickErrorName();
    } else if (contact === "" || contact.length !== 10) {
      handleClickContactError();
    } else if (address === "") {
      handleClickAddressError();
    } else {
      submitOrder();
    }
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="menupage">
        <Dialog
          open={errorContact}
          onClose={handleClickContactError}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Hey please check you contact number."}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClickContactErrorClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={errorAddress}
          onClose={handleClickAddressError}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Hey please enter your address."}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClickAddressErrorClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Hurray! Your order has been submitted."}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={error}
          onClose={handleCloseError}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Add any meal."}</DialogTitle>
          <DialogActions>
            <Button onClick={handleCloseError} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={errorname}
          onClose={handleCloseErrorName}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Please enter your name."}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleCloseErrorName} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <header className="menupage__header ">
          <Nav table="Home Delivery" />
          <img
          onClick={cart}
          src={cart3}
          onClick={openModal}
          className="cartdesktop"
        />
  
           
        </header>
        <section className="menupage__section1 ">
          <label htmlFor="customerName">User Name</label>
          <input
            className="menupage__input "
            type="text"
            value={name}
            placeholder="Please enter your name"
            required
            onChange={handleName}
          />
          <label htmlFor="customerName">Contact Number</label>
          <input
            className="menupage__input "
            type="text"
            value={contact}
            pattern="[6-9]{10}"
            placeholder="Please enter your Contact Number"
            required
            onChange={(e) => setContact(e.target.value)}
          />
          <label htmlFor="customerName">Address</label>
          <textarea
            className="menupage__input "
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </section>
        <section className="menupage__catagory">
        <h1>Category </h1>
        <div className="catagory">
        <button
        className="catagory__wrapper"
        onClick={() => setCategory("all")}
      >
      <img src={all} />
      </button>

      <button
        className="catagory__wrapper"
        onClick={() => setCategory("pizza")}
      >
        <img src={pizza} />
      </button>

      <button
        className="catagory__wrapper"
        onClick={() => setCategory("pasta")}
      >
        <img src={pasta} />
      </button>
      <button
        className="catagory__wrapper"
        onClick={() => setCategory("wraps")}
      >
        <img src={wrap} />
      </button>
      <button
        className="catagory__wrapper"
        onClick={() => setCategory("footlongs")}
      >
        <img src={footlong} />
      </button>
      <button
        className="catagory__wrapper"
        onClick={() => setCategory("burger")}
      >
        <img src={burger} />
      </button>
      <button
        className="catagory__wrapper"
        onClick={() => setCategory("sandwich")}
      >
      <img src={sandwich} />
      
      </button>
      <button
        className="catagory__wrapper"
        onClick={() => setCategory("shake")}
      >
        <img src={shake} />
      </button>
      <button
        className="catagory__wrapper"
        onClick={() => setCategory("chicken")}
      >
        <img src={friedchicken} />
      </button>
        </div>
      </section>
        <h1 className="text-2xl">Menu</h1>
        <main className="menupage__product">
          {(() => {
            if (category === "all") {
              return <All menuItems={menuItems} setMenuItems={setMenuItems} />;
            } else if (category === "chicken") {
              return (
                <FriedChicken
                  menuItems={menuItems}
                  setMenuItems={setMenuItems}
                />
              );
            } else if (category === "burger") {
              return (
                <Burger menuItems={menuItems} setMenuItems={setMenuItems} />
              );
            } else if (category === "sandwich") {
              return (
                <Sandwich menuItems={menuItems} setMenuItems={setMenuItems} />
              );
            } else if (category === "pasta") {
              return (
                <Pasta menuItems={menuItems} setMenuItems={setMenuItems} />
              );
            } else if (category === "wraps") {
              return (
                <Wraps menuItems={menuItems} setMenuItems={setMenuItems} />
              );
            } else if (category === "footlongs") {
              return (
                <Footlongs menuItems={menuItems} setMenuItems={setMenuItems} />
              );
            } else if (category === "pizza") {
              return (
                <Pizza menuItems={menuItems} setMenuItems={setMenuItems} />
              );
            } else {
              return <div>Add ANother</div>;
            }
          })()}
        </main>
        
        <img
          onClick={openDrawer}
          className="cart" 
          src={cart3}
        />

        <Drawer
          duration={250}
          hideScrollbars={true}
          onClose={closeDrawer}
          isVisible={isVisible}
          className="drawer"
        >
          <div className="drawer__content">
            <div className="drawer__scroll">
              {menuItems.map((menu) => {
                return (
                  <div>
                    <div className="drawer__wrapper">
                      <h1>
                        {" "}
                        <span> Product Name:</span> {menu.name}
                      </h1>
                      <h1>
                        <span> Price:</span> {menu.price}
                      </h1>
                      <h1>
                        <span> Quantity:</span> {menu.numberOfPlates}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="drawer__submit" onClick={checkMenu}>
              {" "}
              <span>Submit</span>{" "}
            </button>
          </div>
        </Drawer>
      
        <img
        onClick={cart}
        src={cart3}
        onClick={openModal}
      />

         
   
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="drawer__scroll">
        {menuItems.map((menu) => {
          return (
            <div>
              <div className="drawer__wrapper">
                <h1>
                  {" "}
                  <span> Product Name:</span> {menu.name}
                </h1>
                <h1>
                  <span> Price:</span> {menu.price}
                </h1>
                <h1>
                  <span> Quantity:</span> {menu.numberOfPlates}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <button className="drawer__submit" onClick={checkMenu}>
        {" "}
        <span>Submit</span>{" "}
      </button>
      </Modal>
      </div>
    </>
  );
};
