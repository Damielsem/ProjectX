import React from "react";
import classes from "./post.module.css";

const Post = (props) => {
  return (
    <div className={classes.Item}>
      <div className={classes.Item2}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4iwojH8SPBXk-n_U2ezw1vkHNec_ClX5t_w&usqp=CAU" />
        <h5>{props.message}</h5>
      </div>
      <div>
        <span>Like {props.likes}</span>
      </div>
    </div>
  );
};
export default Post;
