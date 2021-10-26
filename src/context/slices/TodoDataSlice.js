import { createSlice } from "@reduxjs/toolkit";

export const todoDataSlice = createSlice({
  name: "todoData",
  initialState: {
    value: [{ title: "", body: "" }],
  },
  reducers: {
    updateTodoData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateTodoData } = todoDataSlice.actions;
export const selectTodoData = (state) => state.todoData.value;
export default todoDataSlice.reducer;
