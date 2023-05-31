import { Request, Response } from "express";
import { Lecturer } from "../../models/lecturer";

export const getAllLecturers = async (req: Request, res: Response) => {
  try {
    const lecturers = await Lecturer.find().populate("Lecturer");

    res.status(200).json(lecturers);
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};
