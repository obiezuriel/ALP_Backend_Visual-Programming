import { Request, Response } from "express";
import { MoodService } from "../services/mood-service";
import { CreateMoodRequest } from "../models/mood-model";
import { success } from "zod";

export const MoodController = {
    async create(req: Request, res: Response) {
        try {
            const request: CreateMoodRequest = {
                user_id     : Number(req.body.user_id), 
                mood_type   : req.body.mood_type
            };

            const response = await MoodService.create(request);

            res.status(200).json({
                success : true,
                data    : response
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                success : false,
                message : "Internal Server Error"
            });
        }
    }
}