import { Request, Response } from "express";
import { Course } from "../../models/course";

export const getCourse = async (req: Request, res: Response) => {
  const { lecturerId } = req.params;

  try {
    const subjects = await Course.find({ lecturer: lecturerId });
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error });
  }
};
