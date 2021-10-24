import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    value: true,
  },
  reducers: {
    updateUserData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateUserData } = userDataSlice.actions;
export const selectUserData = (state) => state.userData.value;
export default userDataSlice.reducer;
