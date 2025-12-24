import { Meditation_Song } from "../../generated/prisma";
import { prismaClient } from "../utils/database-util";

export class MeditationService {

  static async getAll(): Promise<any[]> {
    return await prismaClient.meditation_Song.findMany({
      orderBy: {
        id: 'asc'
      },
      select: {
        id: true,
        title: true,
        description: true,
        artist: true,
        duration: true,
        coverImage: true,
        user_id: true
      }
    });
  }

  static async getById(id: string): Promise<any> {
    return await prismaClient.meditation_Song.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        title: true,
        description: true,
        artist: true,
        duration: true,
        coverImage: true,
        user_id: true
      }
    });
  }
}
