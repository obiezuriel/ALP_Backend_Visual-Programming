import fs from "fs";
import path from "path";
import { Request, Response } from "express";
import { MeditationService } from "../services/meditation-service";


export class MeditationController {

  static async getAll(req: Request, res: Response) {
    const data = await MeditationService.getAll();
    res.json({
      status: "success",
      data: data
    });
  }

  static async getById(req: Request, res: Response) {
    const id = req.params.id;
    const data = await MeditationService.getById(id);

    if (!data) {
      return res.status(404).json({
        status: "error",
        message: "Meditation song not found"
      });
    }

    res.json({
      status: "success",
      data: data
    });
  }
}
