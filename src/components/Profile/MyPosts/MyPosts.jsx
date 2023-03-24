import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const newPostElement = React.createRef();
  const addPost = () => {
    const text = newPostElement.current.value;
    props.addPost(text);
    props.updateNewPostText("");
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.Post}>
        {props.state.map((post) => {
          return <Post message={post.message} likes={post.likes} key={post} />;
        })}
      </div>
    </div>
  );
};
export default MyPosts;
