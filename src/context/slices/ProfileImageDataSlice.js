import { createSlice } from "@reduxjs/toolkit";

export const profileImageDataSlice = createSlice({
  name: "profileImageData",
  initialState: {
    value: null,
  },
  reducers: {
    updateProfileImageData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateProfileImageData } = profileImageDataSlice.actions;
export const selectProfileImageData = (state) => state.profileImageData.value;
export default profileImageDataSlice.reducer;
