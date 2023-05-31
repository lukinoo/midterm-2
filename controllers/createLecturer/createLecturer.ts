import { Request, Response } from "express";
import { Lecturer } from "../../models/lecturer";

export const createLecturer = async (req: Request, res: Response) => {
  try {
    const lecturer = new Lecturer({ name: "luka", subjects: "webdev" });

    await lecturer.save();

    res.status(200).json(lecturer);
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};
