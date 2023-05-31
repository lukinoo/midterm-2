import { Request, Response } from "express";
import { Course } from "../../models/course";

export const createCourse = async (req: Request, res: Response) => {
  const subject = new Course({ name: "webdev" });

  subject
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
