import { prismaClient } from "../utils/database-util";
import { Prisma } from "../../generated/prisma";
import { toFavoriteResponse, FavoriteResponse } from "../models/favorite-model";

export const FavoriteService = {
    async create(userId: number, text: string): Promise<FavoriteResponse> {
        const existing = await prismaClient.favorite.findFirst({
            where: {
                user_id: userId,
                affirmation_text: text
            }
        });

        if (existing) {
            throw new Error("DUPLICATE_FAVORITE");
        }

        const favorite = await prismaClient.favorite.create({
            data: {
                user_id: userId,
                affirmation_text: text,
                note: ""
            }
        });

        return toFavoriteResponse(favorite);
    },

    async getAll(userId: number): Promise<FavoriteResponse[]> {
        const favorites = await prismaClient.favorite.findMany({
            where: { user_id: userId },
            orderBy: { created_at: "desc" }
        });

        return favorites.map(toFavoriteResponse);
    },

    async updateNote(favoriteId: number, newNote: string): Promise<FavoriteResponse> {
        try {
            const favorite = await prismaClient.favorite.update({
                where: { id: favoriteId },
                data: { note: newNote }
            });

            return toFavoriteResponse(favorite);
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2025") {
                    throw new Error("FAVORITE_NOT_FOUND");
                }
            }
            throw error;
        }
    },

    async delete(favoriteId: number): Promise<void> {
        try {
            await prismaClient.favorite.delete({
                where: { id: favoriteId }
            });
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2025") {
                    throw new Error("FAVORITE_NOT_FOUND");
                }
            }
            throw error;
        }
    },

    async isFavorited(userId: number, text: string): Promise<boolean> {
        const favorite = await prismaClient.favorite.findFirst({
            where: {
                user_id: userId,
                affirmation_text: text
            }
        });

        return !!favorite;
    }
};