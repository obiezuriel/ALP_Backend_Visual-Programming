import express from 'express';
import { JournalController } from '../controllers/journal-controller';
import { MeditationController } from '../controllers/meditation-controller';
import { MoodController } from '../controllers/mood-controller';
import { FavoriteController } from '../controllers/favorite-controller';

export const publicRouter = express.Router();

//journal
publicRouter.post("/journal", JournalController.createJournal);
publicRouter.get("/journal", JournalController.getAllJournals);
publicRouter.get("/journal/:id", JournalController.getJournalById);

//meditation
publicRouter.get("/meditations", MeditationController.getAll);
publicRouter.get("/meditations/:id", MeditationController.getById);

//mood
publicRouter.post("/mood", MoodController.create);

//favorite
publicRouter.post("/favorites", FavoriteController.create);
publicRouter.get("/favorites", FavoriteController.getAll);
publicRouter.get("/favorites/check", FavoriteController.checkFavorited);
publicRouter.put("/favorites/:id", FavoriteController.update);
publicRouter.delete("/favorites/:id", FavoriteController.delete);