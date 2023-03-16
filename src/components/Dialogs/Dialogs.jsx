import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItems from "./DialogsItems/DialogsItems";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogElements = props.state.dialogsData.map((dialogs) => (
    <DialogsItems name={dialogs.name} id={dialogs.id} />
  ));
  const messagesElements = props.state.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  const newPostElement = React.createRef();
  const addPost = () => {
    const text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElements}</div>
      <div>
        <div className={classes.messages}>{messagesElements}</div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
  );
};
export default Dialogs;
