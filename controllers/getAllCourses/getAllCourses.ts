import { Request, Response } from "express";
import { Course } from "../../models/course";

export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const subjects = await Course.find().populate("Collections");

    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};
