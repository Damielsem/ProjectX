import { rerenderEntireTree } from "../render";

const state = {
  profilePage: {
    posts: [
      { message: "Hey, It's me Mario", likes: 7 },
      { message: "It's my Love", likes: 69 },
    ],
  },

  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Samael" },
      { id: 2, name: "Dea" },
      { id: 3, name: "Maks" },
      { id: 4, name: "Father" },
      { id: 5, name: "Mother" },
    ],
    messagesData: [
      { id: 1, message: "My fear my honest" },
      { id: 2, message: "My love" },
      { id: 3, message: "Yo man" },
    ],
  },
};

export const addPost = (postMessage) => {
  const newPost = {
    id: 3,
    message: postMessage,
    likes: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
