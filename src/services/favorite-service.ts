import { PrismaClient, Prisma } from "../../generated/prisma";
import { toFavoriteResponse, FavoriteResponse } from "../models/favorite-model";

const prisma = new PrismaClient();

export const FavoriteService = {
    //CREATE 
    async create(userId: number, text: string): Promise<FavoriteResponse> {
        // Cek dulu apakah sudah ada
        const existing = await prisma.favorite.findFirst({
            where: {
                user_id: userId,
                affirmation_text: text
            }
        });

        if (existing) {
            throw new Error("DUPLICATE_FAVORITE");
        }

        const favorite = await prisma.favorite.create({
            data: {
                user_id: userId,
                affirmation_text: text,
                note: ""
            }
        });

        return toFavoriteResponse(favorite);
    },

    //READ
    async getAll(userId: number): Promise<FavoriteResponse[]> {
        const favorites = await prisma.favorite.findMany({
            where: { user_id: userId },
            orderBy: { created_at: "desc" }
        });

        return favorites.map(toFavoriteResponse);
    },

    //UPDATE
    async updateNote(favoriteId: number, newNote: string): Promise<FavoriteResponse> {
        try {
            const favorite = await prisma.favorite.update({
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

    //DELETE
    async delete(favoriteId: number): Promise<void> {
        try {
            await prisma.favorite.delete({
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

    //cek kata afirmasi udah masuk favorit
    async isFavorited(userId: number, text: string): Promise<boolean> {
        const favorite = await prisma.favorite.findFirst({
            where: {
                user_id: userId,
                affirmation_text: text
            }
        });

        return !!favorite;
    }
};