import { Meditation } from "../models/meditation-model";

export class MeditationService {

  static async getAll(): Promise<Meditation[]> {
    return [
      {
        id: 1,
        title: "Night Island",
        duration: 45,
        description: "Ease the mind into a restful night's sleep.",
        audioUrl: "https://example.com/audio/night-island.mp3",
        coverImage: "https://example.com/image/night-island.png"
      },
      {
        id: 2,
        title: "Calm Forest",
        duration: 30,
        description: "Relax with peaceful forest ambience.",
        audioUrl: "https://example.com/audio/calm-forest.mp3",
        coverImage: "https://example.com/image/calm-forest.png"
      }
    ];
  }

  static async getById(id: string): Promise<Meditation | null> {
    const data = await this.getAll();
    return data.find(item => item.id === Number(id)) || null;
  }
}
