import { createSlice } from "@reduxjs/toolkit";

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    value: false,
    message: "",
    severity: "success",
  },
  reducers: {
    updateSnackbar: (state, action) => {
      state.value = action.payload.value;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
  },
});

export const { updateSnackbar } = snackbarSlice.actions;
export const selectSnackbar = (state) => state.snackbar;
export default snackbarSlice.reducer;
