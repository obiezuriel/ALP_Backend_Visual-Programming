import { Mood_Type } from "../../generated/prisma";

export interface MoodCreateRequest {
    user_id         : number;
    mood_type       : Mood_Type;
}

export interface MoodResponse {
    id              : number;
    mood_type       : Mood_Type;
    affirmation_teks: string;
    created_at      : Date;
}

