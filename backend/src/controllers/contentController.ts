// src/controllers/contentController.ts
import { Request, Response } from 'express';
import Content from '../models/contentModel';

export const getContents = async (req: Request, res: Response) => {
	const contents = await Content.find();
	res.json(contents);
};

export const createContent = async (req: Request, res: Response) => {
	const newContent = new Content(req.body);
	const savedContent = await newContent.save();
	res.json(savedContent);
};
