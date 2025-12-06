import { NextFunction, Request, Response } from "express";
import { JournalCreateRequest } from "../models/journal-model";
import { JournalService } from "../services/journal-service";

export class JournalController{
    static async createJournal(req: Request, res: Response, next: NextFunction){
        try {
            const reqData = req.body as JournalCreateRequest
            const response = await JournalService.createJournal(reqData)
            res.status(200).json({
                data: response
            })
        } catch (error){
            next(error)
        }
    }

    static async getAllJournals(req: Request, res: Response, next: NextFunction){
        try{
            const response = await JournalService.getAllJournals()

            res.status(200).json({
                data: response
            })
        } catch (error){
            next(error)
        }
    }

    static async getJournalById(req: Request, res: Response, next: NextFunction){
        try{
            const journalId = Number(req.params.id)
            const response = await JournalService.getJournalById(journalId)
            res.status(200).json({
                data: response
            })
        } catch (error){
            next(error)
        }
    }
}