// src/controllers/ContentController.ts
import { Request, Response } from "express";
import Content from "../../models/Content/ContentModel";
import upload from "../../config/MulterConfig";

export const createContent = async (req: Request, res: Response) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { title, description, tags, links, userId, type } = req.body;
    const filePath = req.file ? `/uploads/${req.file.filename}` : null;

    try {
      const newContent = new Content({
        title,
        description,
        tags,
        links,
        file: filePath,
        fileType: req.file ? req.file.mimetype : links.length ? "link" : "",
        userId, // Ensure userId is passed
        type, // Ensure type is passed
      });

      await newContent.save();
      res.status(201).json(newContent);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  });
};
