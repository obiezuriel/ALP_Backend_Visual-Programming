import { NextFunction, Request, Response } from "express";
import { CreateFavoriteRequest, UpdateFavoriteRequest } from "../models/favorite-model";
import { FavoriteService } from "../services/favorite-service";

export class FavoriteController {
    //POST 
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const reqData = req.body as CreateFavoriteRequest;
            const response = await FavoriteService.create(reqData.user_id, reqData.affirmation_text);

            res.status(201).json({
                data: response
            });
        } catch (error) {
            next(error);
        }
    }

    //GET 
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = Number(req.query.user_id);
            const response = await FavoriteService.getAll(userId);

            res.status(200).json({
                data: response
            });
        } catch (error) {
            next(error);
        }
    }

    //PUT 
    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const reqData = req.body as UpdateFavoriteRequest;
            const response = await FavoriteService.updateNote(id, reqData.note || "");

            res.status(200).json({
                data: response
            });
        } catch (error) {
            next(error);
        }
    }

    //DELETE 
    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            await FavoriteService.delete(id);

            res.status(200).json({
                message: "Deleted successfully"
            });
        } catch (error) {
            next(error);
        }
    }

    // GET cek kata afirmasi udah masuk favorit
    static async checkFavorited(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = Number(req.query.user_id);
            const text = req.query.text as string;
            const isFavorited = await FavoriteService.isFavorited(userId, text);

            res.status(200).json({
                data: { is_favorited: isFavorited }
            });
        } catch (error) {
            next(error);
        }
    }
}