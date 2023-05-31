import express from "express";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import { getCourse } from "./controllers/getCourse";
import { createCourse } from "./controllers/createCourse";
import { getLecturerSubjects } from "./controllers/getLecturerSubjects";
import { createLecturer } from "./controllers/createLecturer";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// course handler methods
app.get("/course/:lecturerId", getCourse);
app.post("/course", createCourse);

// lecturer handler methods
app.get("/lecturers/:lecturerId/subjects", getLecturerSubjects);
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
