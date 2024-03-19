import { configureStore } from "@reduxjs/toolkit";
import { indexSlice } from "./reducers";

export default configureStore({
  reducer: {
    number: indexSlice.reducer,
  },
});
