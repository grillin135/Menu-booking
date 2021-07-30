import React from "react";

const MenuPageInput = ({
  name,
  address,
  contact,
  handleName,
  setContact,
  setAddress,
  nameRef
}) => {
  return (
    <section className="menupage__section ">
      <label htmlFor="customerName">User Name</label>
      <input
        ref={nameRef}
        className="menupage__input1 "
        type="text"
        value={name}
        placeholder="Please enter your name"
        required
        onChange={handleName}
      />
    </section>
  );
};

export default MenuPageInput;
