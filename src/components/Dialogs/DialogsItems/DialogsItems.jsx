import React from "react";
import classes from "./DialogsItems.module.css";
import c from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogsItems = (props) => {
  return (
    <div className={c.dialogs + " " + c.active}>
      <img
        className={classes.background}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOscBkACCwR9C08VRRdWiTS4DN5l5i3JVc2dwHc5Qdrl0VcPqekfDtk3lqHBA02FeUgZs&usqp=CAU"
      />
      <NavLink to={"/dialogs/*" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogsItems;
