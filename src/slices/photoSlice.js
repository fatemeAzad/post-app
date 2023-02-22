import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPhotos } from "../services/service";
import { getPhoto } from "./../services/service";

const initialState = {
  photosList: [],
};

export const fetchPhotos = createAsyncThunk("fetch/photos", async () => {
  const response = await getPhotos();
  const data = response.data;
  return data;
});
export const fetchPhoto = createAsyncThunk("fetch/photo", async (postId) => {
  const response = await getPhoto(postId);
  const data = response.data;

  return data;
});

const photoSlice = createSlice({
  name: "photo",
  initialState,
  extraReducers: {
    [fetchPhotos.fulfilled]: (state, action) => {
      state.photosList = action.payload;
    },
    [fetchPhoto.fulfilled]: (state, action) => {
      state.photosList = action.payload;
    },
  },
});
export default photoSlice.reducer;
