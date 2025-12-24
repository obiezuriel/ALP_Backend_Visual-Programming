import express from 'express';
import path from 'path';
import fs from 'fs';
import { JournalController } from '../controllers/journal-controller';
import { MeditationController } from '../controllers/meditation-controller';


export const publicRouter = express.Router();

publicRouter.post("/journal", JournalController.createJournal);
publicRouter.get("/journal", JournalController.getAllJournals);
publicRouter.get("/journal/:id", JournalController.getJournalById);

// Meditation routes
publicRouter.get("/meditations", MeditationController.getAll);
publicRouter.get("/meditations/:id", MeditationController.getById);

// Meditation Audio Streaming
publicRouter.get("/meditations/:id/stream", (req, res) => {
  const { id } = req.params;

  // Map ID ke nama file audio asli
  const fileMap: { [key: string]: string } = {
    "1": "Ripples of Past Reverie.mp3",
    "2": "Calm Water Ripples.mp3",
    "3": "A Promise.mp3",
    "4": "Moonlight.mp3",
    "5": "Winter.mp3",
    "6": "Downpour.mp3"
  };

  const fileName = fileMap[id];
  console.log(`[Stream] ID: ${id}, FileName: ${fileName}`);

  if (!fileName) {
    return res.status(404).json({
      status: "error",
      message: "Audio file not found - invalid ID",
    });
  }

  const audioPath = path.join(
    process.cwd(),
    "uploads",
    "meditation",
    fileName
  );

  console.log(`[Stream] Path: ${audioPath}`);
  console.log(`[Stream] Exists: ${fs.existsSync(audioPath)}`);

  if (!fs.existsSync(audioPath)) {
    return res.status(404).json({
      status: "error",
      message: `Audio file not found: ${fileName}`,
    });
  }
  
  const stat = fs.statSync(audioPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunkSize = end - start + 1;
    const file = fs.createReadStream(audioPath, { start, end });

    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "audio/mpeg",
    });

    file.pipe(res);
  } else {
    res.writeHead(200, {
      "Content-Length": fileSize,
      "Content-Type": "audio/mpeg",
    });

    fs.createReadStream(audioPath).pipe(res);
  }
});