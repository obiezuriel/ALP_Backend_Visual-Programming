const { PrismaClient, Mood_Type } = require('./generated/prisma');

const prisma = new PrismaClient();

const affirmationsData = {
    HAPPY: [
        "Your smile is contagious! Keep shining.",
        "Enjoy this happiness, you deserve it.",
        "Your positive energy is amazing today.",
        "You're awesome! Keep up the spirit.",
        "A beautiful day for a beautiful soul like you.",
        "Your happiness inspires everyone around you.",
        "Keep spreading these positive vibes!",
        "You're the reason someone smiled today."
    ],
    SAD: [
        "It's okay to be sad, it's only human.",
        "The storm will pass, sending you a hug!",
        "Take some rest, we'll try again tomorrow.",
        "It's okay to cry, it's your heart's way of healing.",
        "You're not alone, someone cares about you.",
        "Today was hard, but you did your best.",
        "Take your time, you don't have to be okay all the time.",
        "Every day is a new page, tomorrow can be better."
    ],
    NEUTRAL: [
        "A peaceful day is a blessing.",
        "Take it easy today.",
        "Focus on the little good things.",
        "Sometimes okay is enough. And that's perfectly fine.",
        "Enjoy this calm moment, recharge your energy.",
        "An ordinary day is still a precious day.",
        "You showed up today, that's already an achievement.",
        "Take a deep breath, you're doing your best."
    ]
};

async function main() {
    console.log('Seeding moods and affirmations...');

    for (const moodType of Object.values(Mood_Type)) {
        const mood = await prisma.mood.upsert({
            where: { type: moodType },
            update: {},
            create: {
                type: moodType,
                affirmations: {
                    create: affirmationsData[moodType].map(message => ({
                        message: message
                    }))
                }
            }
        });
        console.log(`Created mood: ${mood.type}`);
    }

    console.log('Seeding completed!');
    console.log('- 3 Moods (HAPPY, SAD, NEUTRAL)');
    console.log('- 24 Affirmations (8 per mood)');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });