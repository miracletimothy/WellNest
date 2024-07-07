// src/controllers/recordController.ts
import { Request, Response } from 'express';
import Record from '../models/recordModel';

export const getRecords = async (req: Request, res: Response) => {
	const records = await Record.find();
	res.json(records);
};

export const createRecord = async (req: Request, res: Response) => {
	const newRecord = new Record(req.body);
	const savedRecord = await newRecord.save();
	res.json(savedRecord);
};
