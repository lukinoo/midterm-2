import { Request, Response } from "express";
import { Course } from "../../models/course";

export const createCourse = async (req: Request, res: Response) => {
  const course = new Course({ name: "full-stack-development" });

  course
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};
