import { prismaClient } from "../utils/database-util";
import { CreateMoodRequest, toMoodResponse } from "../models/mood-model";

export const MoodService = {
    async create(request: CreateMoodRequest) {
        //cek mood_type
        const mood = await prismaClient.mood.findUnique({
            where: { type: request.mood_type },
            include: { affirmations: true }
        });

        if (!mood) {
            throw new Error("Mood type not found");
        }

        //randomizer
        const affirmations = mood.affirmations;
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        const selectedAffirmation = affirmations[randomIndex];

        //return response
        return toMoodResponse(mood, selectedAffirmation);
    }
};