import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogsItems = (props) => {
  return (
    <div className={classes.dialogs + " " + classes.active}>
      <NavLink to={"/dialogs/*" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.dialogs}>{props.message}</div>;
};
const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Samael" },
    { id: 2, name: "Dea" },
    { id: 3, name: "Maks" },
    { id: 4, name: "Father" },
    { id: 5, name: "Mother" },
  ];

  let messagesData = [
    { id: 1, message: "My fear my honest" },
    { id: 2, message: "My love" },
    { id: 3, message: "Yo man" },
  ];

  let dialogElements = dialogsData.map((dialogs) => (
    <DialogsItems name={dialogs.name} id={dialogs.id} />
  ));
  let messagesElements = messagesData.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
