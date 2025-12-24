import { PrismaClient } from './generated/prisma/index.js';

const prisma = new PrismaClient();

async function insertMeditations() {
  try {
    // Insert user dulu jika belum ada
    let user = await prisma.user.findFirst({ where: { id: 1 } });
    if (!user) {
      user = await prisma.user.create({
        data: { id: 1, name: "Default User" }
      });
      console.log("✅ User dibuat:", user);
    } else {
      console.log("✅ User sudah ada");
    }

    // Insert lagu pertama
    const song1 = await prisma.meditation_Song.create({
      data: {
        title: "Ripples of Past Reverie",
        description: "A soothing meditation experience with ambient sounds.",
        artist: "Unknown Artist",
        duration: 45,
        audioUrl: "http://10.0.2.2:3000/api/meditations/1/stream",
        coverImage: "https://example.com/image/ripples-of-past-reverie.png",
        user_id: 1
      }
    });
    console.log("✅ Lagu 1 ditambahkan:", song1);

    // Insert lagu kedua
    const song2 = await prisma.meditation_Song.create({
      data: {
        title: "Calm Water Ripples",
        description: "Let the gentle ripples guide you to inner peace.",
        artist: "Unknown Artist",
        duration: 40,
        audioUrl: "http://10.0.2.2:3000/api/meditations/2/stream",
        coverImage: "https://example.com/image/calm-water-ripples.png",
        user_id: 1
      }
    });
    console.log("✅ Lagu 2 ditambahkan:", song2);

    console.log("✅ Berhasil insert 2 lagu!");
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

insertMeditations();
