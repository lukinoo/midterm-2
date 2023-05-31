import { Request, Response } from "express";
import { Lecturer } from "../../models/lecturer";

export const getLecturerSubjects = async (req: Request, res: Response) => {
  const { lecturerId } = req.params;

  try {
    const lecturer = await Lecturer.findById(lecturerId).populate("subjects");

    if (!lecturer) {
      return res.status(404).json({ error: "Lecturer not found" });
    }

    res.json(lecturer);
  } catch (error) {
    console.error("Error retrieving lecturer", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
