import { createSlice } from "@reduxjs/toolkit";

export const userAuthDataSlice = createSlice({
  name: "userAuthData",
  initialState: {
    value: false,
  },
  reducers: {
    updateUserAuthData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateUserAuthData } = userAuthDataSlice.actions;
export const selectUserAuthData = (state) => state.userAuthData.value;
export default userAuthDataSlice.reducer;
