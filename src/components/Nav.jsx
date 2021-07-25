import React from "react";

const Nav = ({ table }) => {
  return (
    <div className="nav">
      <img className="nav__logo" src="http://grillinn.in/wp-content/themes/grill_inn/img/GrillInn-Logo.png" alt="" />
      <h1 className="nav__table">Table {table}</h1>
    </div>
  );
};

export default Nav;
