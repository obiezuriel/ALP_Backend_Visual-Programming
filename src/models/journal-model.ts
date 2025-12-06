import { Journal } from "../../generated/prisma"

export interface JournalCreateRequest {
    date: string
    title: string
    content: string
    user_id: number
}

export interface AllJournalResponse {
    id: number
    date: string
    title: string
}

export interface DetailedJournalResponse {
    date: string
    title: string
    content: string
}

export function toJournalResponseList(prismaJournals: Journal[]): AllJournalResponse[] {
    const result = prismaJournals.map((journal) => ({
        id: journal.id,
        date: journal.date,
        title: journal.title,
    }))

    return result
}

export function toJournalResponse(prismaJournal: Journal): DetailedJournalResponse {
    return {
        date: prismaJournal.date,
        title: prismaJournal.title,
        content: prismaJournal.content
    }
}