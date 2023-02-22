import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getPost, getPosts } from "./../services/service";

const initialState = {
  postList: [],
};

//action
export const fetchPosts = createAsyncThunk("posts/fetch", async (start) => {
  const response = await getPosts(start);
  const data = response.data;
  return data;
});

export const fetchPost = createAsyncThunk("post/fetch", async (postId) => {
  const response = await getPost(postId);
  const data = response.data;
  return data;
});

const postsSlice = createSlice({
  name: "postlist",
  initialState,
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      // state.postList.push(...action.payload);
      state.postList=action.payload
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.postList.push(...action.payload);
    },
  },
});
export default postsSlice.reducer;
