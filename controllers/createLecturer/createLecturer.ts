import { Request, Response } from "express";
import { Course } from "../../models/course";
import { Lecturer } from "../../models/lecturer";

const createTask = async (userId: string, taskTitle: string) => {
  const task = await new Course({ title: taskTitle }).save();

  await Lecturer.findByIdAndUpdate(
    userId,
    { $push: { tasks: task._id } },
    { new: true }
  );
};

export const createLecturer = async (req: Request, res: Response) => {
  try {
    const lecturer = new Lecturer({ name: "lukicha", subjects: [] });
    await lecturer.save();

    // await createTask(lecturer.id, "hello, world");
    // await createTask(lecturer.id, "hello, world");
    // await createTask(lecturer.id, "hello, world");
    res.status(201).json(lecturer);
  } catch (error) {
    res.status(500).json({ error });
  }
};
