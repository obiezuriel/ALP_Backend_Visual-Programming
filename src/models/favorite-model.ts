import { Favorite } from "../../generated/prisma";

export interface CreateFavoriteRequest {
    user_id: number;
    affirmation_text: string;
}

export interface UpdateFavoriteRequest {
    note: string;
}

export interface FavoriteResponse {
    id: number;
    user_id: number;
    affirmation_text: string;
    note: string | null;
    created_at: Date;
}

export function toFavoriteResponse(favorite: Favorite): FavoriteResponse {
    return {
        id: favorite.id,
        user_id: favorite.user_id,
        affirmation_text: favorite.affirmation_text,
        note: favorite.note,
        created_at: favorite.created_at
    };
}