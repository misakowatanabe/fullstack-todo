import { configureStore } from "@reduxjs/toolkit";
import todoDataReducer from "./slices/TodoDataSlice";
import profileDataReducer from "./slices/ProfileDataSlice";
import profileImageDataReducer from "./slices/ProfileImageDataSlice";
import userAuthDataReducer from "./slices/UserAuthDataSlice";
import isLoadingDataReducer from "./slices/IsLoadingDataSlice";
import userDataReducer from "./slices/UserDataSlice";
import snackbarReducer from "./slices/SnackbarSlice";

export default configureStore({
  reducer: {
    todoData: todoDataReducer,
    profileData: profileDataReducer,
    profileImageData: profileImageDataReducer,
    userAuthData: userAuthDataReducer,
    isLoadingData: isLoadingDataReducer,
    userData: userDataReducer,
    snackbar: snackbarReducer,
  },
});
