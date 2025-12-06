import { Journal } from "../../generated/prisma";
import { AllJournalResponse, DetailedJournalResponse, JournalCreateRequest, toJournalResponse, toJournalResponseList } from "../models/journal-model";
import { prismaClient } from "../utils/database-util";
import { JournalValidation } from "../validations/journal-validation";
import { Validation } from "../validations/validation";
import { ResponseError } from "../error/response-error"

export class JournalService {
    static async createJournal(req: JournalCreateRequest): Promise<string> {
        const validatedData = Validation.validate(
            JournalValidation.CREATE,
            req
        )

        await prismaClient.journal.create({
            data: {
                date: validatedData.date,
                title: validatedData.title,
                content: validatedData.content,
                user_id: validatedData.user_id
            }
        })

        return "Journal created successfully"
    }

    static async getAllJournals(): Promise<AllJournalResponse[]> {
        const journals = await prismaClient.journal.findMany({
            where: {
                user_id: 1
            }
        })

        return toJournalResponseList(journals)
    }

    static async getJournalById(journalId: number): Promise<DetailedJournalResponse>{
        const journal = await this.checkJournalIsEmpty(journalId)

        return toJournalResponse(journal)
    }

    static async checkJournalIsEmpty(journalId: number): Promise<Journal>{
        const journal = await prismaClient.journal.findFirst({
            where: {
                id: journalId
            }
        })

        if(!journal){
            throw new ResponseError(400, "Journal not found")
        }

        return journal
    }
}