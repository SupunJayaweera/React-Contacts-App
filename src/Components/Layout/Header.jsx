import React from "react";
import logo from "../../images/react.png";

const Header = () => {
  const title = "Contacts App";

  return (
    <div className="py-2 pl-2" style={{ borderBottom: "1px solid #777" }}>
      <img
        src={logo}
        alt="CountOpedia"
        style={{ width: "35px", verticalAlign: "top" }}
      />
      <span className="h2 pt-4 text-white-50">{title}</span>
    </div>
  );
};

export default Header;
