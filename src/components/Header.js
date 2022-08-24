import React from "react";

const Header = (props) => {
  return (
    <header
      style={{
        height: "100px",
        backgroundColor: "yellow",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <img
          style={{ height: "110px" }}
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
        />
      </div>
      <p style={{ fontSize: "40px" }}>{props.username}</p>
    </header>
  );
};
export default Header;
