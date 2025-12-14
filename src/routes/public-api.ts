import express from 'express';
import { JournalController } from '../controllers/journal-controller';
import { MoodController } from '../controllers/mood-controller';

export const publicRouter = express.Router();

publicRouter.post("/journal", JournalController.createJournal);
publicRouter.get("/journal", JournalController.getAllJournals);
publicRouter.get("/journal/:id", JournalController.getJournalById);
publicRouter.post("/mood", MoodController.create);