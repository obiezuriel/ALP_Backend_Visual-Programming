import { Mood, Affirmation, Mood_Type } from "../../generated/prisma";

export interface CreateMoodRequest {
    user_id: number;
    mood_type: Mood_Type;
}

export interface MoodResponse {
    id: number;
    mood_type: Mood_Type;
    affirmation_text: string;
}

export function toMoodResponse(mood: Mood, affirmation: Affirmation): MoodResponse {
    return {
        id: mood.id,
        mood_type: mood.type,
        affirmation_text: affirmation.message
    };
}