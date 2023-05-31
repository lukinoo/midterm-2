import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import { Course } from "./models/course";
import { Lecturer } from "./models/lecturer";
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

app.get("/course", async (req: Request, res: Response) => {
  try {
    const subjects = await Course.find().populate("Collections");

    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
});

app.post("/course", async (req, res) => {
  const subject = new Course({ name: "webdev" });

  subject
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/lecturer", async (req, res) => {
  try {
    const lecturers = await Lecturer.find().populate("Lecturer");

    console.log(lecturers);
    res.status(200).json(lecturers);
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
});

app.post("/lecturer", async (req, res) => {
  try {
    const lecturer = new Lecturer({ name: "luka", subjects: "webdev" });

    await lecturer.save();
    res.status(200).json(lecturer);
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
});

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
