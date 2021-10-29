import { configureStore } from "@reduxjs/toolkit";
import todoDataReducer from "./slices/TodoDataSlice";
import profileDataReducer from "./slices/ProfileDataSlice";
import userAuthDataReducer from "./slices/UserAuthDataSlice";
import isLoadingDataReducer from "./slices/IsLoadingDataSlice";
import userDataReducer from "./slices/UserDataSlice";
import snackbarReducer from "./slices/SnackbarSlice";

export default configureStore({
  reducer: {
    todoData: todoDataReducer,
    profileData: profileDataReducer,
    userAuthData: userAuthDataReducer,
    isLoadingData: isLoadingDataReducer,
    userData: userDataReducer,
    snackbar: snackbarReducer,
  },
});
