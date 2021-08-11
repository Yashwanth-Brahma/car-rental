import React from "react";
import logo from "../assets/Vahak_Blue.png";

const Header = ({ pageHeader }) => {
  console.log();
  return (
    <>
      <div className="p-3 mb-1">
        <img src={logo} alt="logo" className="w-36" />
      </div>
      <div className="bg-blue-900 text-center text-4xl text-white font-extrabold py-5">
        {pageHeader}
      </div>
    </>
  );
};

export default Header;
