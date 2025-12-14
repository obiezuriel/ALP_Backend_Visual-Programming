import { Mood, Affirmation, Mood_Type } from "../../generated/prisma";

export interface CreateMoodRequest {
    user_id         : number;
    mood_type       : Mood_Type;
}

export interface MoodResponse {
    id              : number;
    mood_type       : Mood_Type;
    affirmation_text: string;
    created_at      : Date;
}

type MoodWithAffirmations = Mood & { affirmations: Affirmation[] };

export function toMoodResponse(mood: MoodWithAffirmations): MoodResponse {
    return {
        id              : mood.id,
        mood_type       : mood.type,
        affirmation_text: mood.affirmations[0]?.message ||"No affirmation found",
        created_at      : new Date()
    }
}
