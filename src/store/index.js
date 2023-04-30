import { configureStore } from "@reduxjs/toolkit";
import exams from "./slices/exams/ged1";
import exams2 from "./slices/exams/ged2";
import exams3 from "./slices/exams/ged3";

export default configureStore({
  reducer: {
    exams,
    exams2,
    exams3,
  },
});
