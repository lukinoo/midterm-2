import express from "express";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import { getAllCourses } from "./controllers/getAllCourses";
import { createCourse } from "./controllers/createCourse";
import { getAllLecturers } from "./controllers/getAllLecturers";
import { createLecturer } from "./controllers/createLecturer";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.urlencoded({ extended: true }));

// course handler methods
app.get("/course", getAllCourses);
app.post("/course", createCourse);

// lecturer handler methods
app.get("/lecturer", getAllLecturers);
app.post("/lecturer", createLecturer);

mongoose
  .connect(
    process.env.DB_URI as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions
  )
  .then((res) => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
