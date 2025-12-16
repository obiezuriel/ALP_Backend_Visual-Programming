import { prismaClient } from "../utils/database-util";
import { CreateMoodRequest, MoodResponse, toMoodResponse } from '../models/mood-model';
import { AFFIRMATION_DATA } from '../utils/affirmation-words-util';

export const MoodService = {
    async create(request: CreateMoodRequest): Promise<MoodResponse> {
        //ambil dari util
        const possibleMessages = AFFIRMATION_DATA[request.mood_type];

        //randomizer
        const randomIndex = Math.floor(Math.random() * possibleMessages.length);
        const selectedMessage = possibleMessages[randomIndex];

        //simpan ke db
        const result = await prismaClient.mood.create({
            data: {
                user_id: request.user_id,
                type: request.mood_type,
                affirmations: {
                    create: {
                        message: selectedMessage
                    }
                }
            },
            include: {
                affirmations: true
            }
        });

        return toMoodResponse(result);
    }
};