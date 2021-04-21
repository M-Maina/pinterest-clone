import React from "react";
import "./Header.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FaceIcon from "@material-ui/icons/Face";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__img"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
          alt=""
        />
        <p>Home</p>
        <p>Today</p>
        <p>Following</p>
      </div>
      <div className="header__middle">
        <div className="header__inputContainer">
          <SearchIcon />
          <input type="" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <NotificationsIcon />
        <ChatIcon />
        <FaceIcon />
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}

export default Header;
