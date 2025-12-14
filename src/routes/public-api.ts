import express from 'express';
import { JournalController } from '../controllers/journal-controller';
import { MeditationController } from '../controllers/meditation-controller';


export const publicRouter = express.Router();

publicRouter.post("/journal", JournalController.createJournal);
publicRouter.get("/journal", JournalController.getAllJournals);
publicRouter.get("/journal/:id", JournalController.getJournalById);

// Meditation routes
publicRouter.get("/meditations", MeditationController.getAll);
publicRouter.get("/meditations/:id", MeditationController.getById);