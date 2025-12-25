export class MeditationValidation {
  static getById(id: string) {
    if (!id || isNaN(Number(id))) {
      throw new Error("Invalid meditation id");
    }
  }
}
