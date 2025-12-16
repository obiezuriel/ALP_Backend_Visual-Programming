import { NextFunction, Request, Response } from "express";
import { CreateMoodRequest } from "../models/mood-model";
import { MoodService } from "../services/mood-service";

export class MoodController {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const reqData = req.body as CreateMoodRequest;
            const response = await MoodService.create(reqData);

            res.status(201).json({
                data: response
            });
        } catch (error) {
            next(error);
        }
    }
}