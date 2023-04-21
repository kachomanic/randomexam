import { configureStore } from "@reduxjs/toolkit";
import exams from "./slices/exams";

export default configureStore({
  reducer: {
    exams,
  },
});
