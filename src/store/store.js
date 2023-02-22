import { configureStore } from "@reduxjs/toolkit";

import commentsReducer from "../slices/commentsSlice";
import photoReducer from "../slices/photoSlice";
import postsReducer from "../slices/postListSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    photos: photoReducer,
    comments: commentsReducer,
  },
});

export default store;
