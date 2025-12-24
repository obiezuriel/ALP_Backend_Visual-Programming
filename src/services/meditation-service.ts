import { Meditation_Song } from "../../generated/prisma";
import { prismaClient } from "../utils/database-util";

export class MeditationService {

  static async getAll(): Promise<Meditation_Song[]> {
    return await prismaClient.meditation_Song.findMany();
  }

  static async getById(id: string): Promise<Meditation_Song | null> {
    return await prismaClient.meditation_Song.findUnique({
      where: { id: Number(id) }
    });
  }
}
