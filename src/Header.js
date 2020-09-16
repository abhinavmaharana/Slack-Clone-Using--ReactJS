import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SeachIcon from "@material-ui/icons/Search";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SeachIcon />
        <input placeholder="search" />
      </div>
      <div className="header__right">
        <HelpOlineIcon />
      </div>
    </div>
  );
}

export default Header;
