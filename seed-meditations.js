const { PrismaClient } = require("./generated/prisma");

const prisma = new PrismaClient();

async function main() {
  // Create or get user
  const user = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1, name: "Default User" },
  });

  // Clear existing meditations
  await prisma.meditation_Song.deleteMany();

  // Seed 6 meditations
  const meditations = await Promise.all([
    prisma.meditation_Song.create({
      data: {
        id: 1,
        title: "Ripples of Past Reverie",
        description: "A soothing meditation experience with ambient sounds.",
        artist: "Meditation Master",
        duration: 45,
        coverImage: "https://example.com/image/ripples-of-past-reverie.png",
        user_id: 1,
      },
    }),
    prisma.meditation_Song.create({
      data: {
        id: 2,
        title: "Calm Water Ripples",
        description: "Let the gentle ripples guide you to inner peace.",
        artist: "Zen Guide",
        duration: 40,
        coverImage: "https://example.com/image/calm-water-ripples.png",
        user_id: 1,
      },
    }),
    prisma.meditation_Song.create({
      data: {
        id: 3,
        title: "A Promise",
        description: "A peaceful and calming meditation experience.",
        artist: "Artist Name",
        duration: 30,
        coverImage: "https://example.com/image/a-promise.png",
        user_id: 1,
      },
    }),
    prisma.meditation_Song.create({
      data: {
        id: 4,
        title: "Moonlight",
        description: "Serene meditation under the moonlight.",
        artist: "Artist Name",
        duration: 50,
        coverImage: "https://example.com/image/moonlight.png",
        user_id: 1,
      },
    }),
    prisma.meditation_Song.create({
      data: {
        id: 5,
        title: "Winter",
        description: "Calm meditation with winter ambience.",
        artist: "Artist Name",
        duration: 55,
        coverImage: "https://example.com/image/winter.png",
        user_id: 1,
      },
    }),
    prisma.meditation_Song.create({
      data: {
        id: 6,
        title: "Downpour",
        description: "Peaceful meditation with rain sounds.",
        artist: "Artist Name",
        duration: 60,
        coverImage: "https://example.com/image/downpour.png",
        user_id: 1,
      },
    }),
  ]);

  console.log("✅ Seeded 6 meditations:", meditations.length);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
