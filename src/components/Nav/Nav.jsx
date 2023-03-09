import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.Item}>
        <NavLink
          to="/profile"
          className={(navData) =>
            navData.isActive ? classes.activeLink : classes.Item
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={classes.Item}>
        <NavLink
          to="/dialogs"
          className={(navData) =>
            navData.isActive ? classes.activeLink : classes.Item
          }
        >
          Messages
        </NavLink>
      </div>
      <div className={classes.Item}>
        <NavLink
          to="/news"
          className={(navData) =>
            navData.isActive ? classes.activeLink : classes.Item
          }
        >
          News
        </NavLink>
      </div>
      <div className={classes.Item}>
        <NavLink
          to="/music"
          className={(navData) =>
            navData.isActive ? classes.activeLink : classes.Item
          }
        >
          Music
        </NavLink>
      </div>
      <div className={classes.Item}>
        <NavLink
          to="/settings"
          className={(navData) =>
            navData.isActive ? classes.activeLink : classes.Item
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
