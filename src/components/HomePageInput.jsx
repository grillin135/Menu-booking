import React,{useState} from "react";
import "../styles/menuPage.scss";
function HomePageInput({
  name,
  address,
  contact,
  handleName,
  setContact,
  setAddress,
})


{
  return (
    <section className="menupage__section1">
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
  );
}

export default HomePageInput;
