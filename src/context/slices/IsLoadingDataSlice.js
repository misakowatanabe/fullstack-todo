import { createSlice } from "@reduxjs/toolkit";

export const isLoadingDataSlice = createSlice({
  name: "isLoadingData",
  initialState: {
    value: true,
  },
  reducers: {
    updateIsLoadingData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateIsLoadingData } = isLoadingDataSlice.actions;
export const selectIsLoadingData = (state) => state.isLoadingData.value;
export default isLoadingDataSlice.reducer;
