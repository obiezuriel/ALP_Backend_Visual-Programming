import express from 'express';
import { JournalController } from '../controllers/journal-controller';

export const publicRouter = express.Router();

publicRouter.post("/journal", JournalController.createJournal);
publicRouter.get("/journal", JournalController.getAllJournals);
publicRouter.get("/journal/:id", JournalController.getJournalById);