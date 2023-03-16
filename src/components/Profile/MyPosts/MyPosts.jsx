import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const posts = [
    { message: "Hey, It's me Mario", likes: 7 },
    { message: "It's my Love", likes: 69 },
  ];

  const newPostElement = React.createRef();
  const addPost = () => {
    const text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={classes.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.Post}>
        {posts.map((post) => {
          return <Post message={post.message} likes={post.likes} key={post} />;
        })}
      </div>
    </div>
  );
};
export default MyPosts;
