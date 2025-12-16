import { Mood_Type } from "../../generated/prisma";

export const AFFIRMATION_DATA: Record<Mood_Type, string[]> = {
    [Mood_Type.HAPPY]: [
        "Your smile is contagious! Keep shining.",
        "Enjoy this happiness, you deserve it.",
        "Your positive energy is amazing today.",
        "You're awesome! Keep up the spirit.",
        "A beautiful day for a beautiful soul like you.",
        "Your happiness inspires everyone around you.",
        "Keep spreading these positive vibes!",
        "You're the reason someone smiled today."
    ],

    [Mood_Type.SAD]: [
        "It's okay to be sad, it's only human.",
        "The storm will pass, sending you a hug!",
        "Take some rest, we'll try again tomorrow.",
        "It's okay to cry, it's your heart's way of healing.",
        "You're not alone, someone cares about you.",
        "Today was hard, but you did your best.",
        "Take your time, you don't have to be okay all the time.",
        "Every day is a new page, tomorrow can be better."
    ],

    [Mood_Type.NEUTRAL]: [
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