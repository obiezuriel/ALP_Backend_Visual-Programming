import { Meditation } from "../models/meditation-model";

export class MeditationService {

  static async getAll(): Promise<Meditation[]> {
    return [
      {
        id: 1,
        title: "Ripples of Past Reverie",
        duration: 45,
        description: "A soothing meditation experience with ambient sounds.",
        audioUrl: "http://10.0.2.2:3000/api/meditations/1/stream",
        coverImage: "https://example.com/image/ripples-of-past-reverie.png"
      },
      {
        id: 2,
        title: "Calm Water Ripples",
        duration: 40,
        description: "Let the gentle ripples guide you to inner peace.",
        audioUrl: "http://10.0.2.2:3000/api/meditations/2/stream",
        coverImage: "https://example.com/image/calm-water-ripples.png"
      }
    ];
  }

  static async getById(id: string): Promise<Meditation | null> {
    const data = await this.getAll();
    return data.find(item => item.id === Number(id)) || null;
  }
}
