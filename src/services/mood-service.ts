import { PrismaClient } from '@prisma/client';
import { CreateMoodRequest, MoodResponse } from '../models/mood-model';
import { AFFIRMATION_DATA } from '../utils/affirmation-words-util';

const prisma = new PrismaClient();

export const MoodService = {
    async create(request: CreateMoodRequest): Promise<MoodResponse> {
        //ambil pesar dari util
        const possibleMessages = AFFIRMATION_DATA[request.mood_type];

        //randomize
        const randomIndex = Math.floor(Math.random() * possibleMessages.length);
        const selectedMessage = possibleMessages[randomIndex];

        //simpan ke db
        const result =  await prisma.mood.create ({
            data: {
                user_id : request.user_id,
                type    : request.mood_type,
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
        return {
            id              : result.id,
            mood_type       : result.type,
            affirmation_teks: result.affirmations[0].message,
            created_at      : new Date()
        };
    }
}