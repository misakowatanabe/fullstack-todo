import { createSlice } from "@reduxjs/toolkit";

export const profileDataSlice = createSlice({
  name: "profileData",
  initialState: {
    value: [{ name: null, email: null, userUid: null }],
  },
  reducers: {
    updateProfileData: (state, action) => {
      state.value = action.payload[0];
    },
  },
});

export const { updateProfileData } = profileDataSlice.actions;
export const selectProfileData = (state) => state.profileData.value;
export default profileDataSlice.reducer;
