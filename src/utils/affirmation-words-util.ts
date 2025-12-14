import { Mood_Type } from "../../generated/prisma"; // Sesuaikan path ke generated prisma

export const AFFIRMATION_DATA = {
  [Mood_Type.HAPPY]: [
    "Senyummu menular! Teruslah bersinar.",
    "Nikmati kebahagiaan ini, kamu pantas mendapatkannya.",
    "Energi positifmu luar biasa hari ini."
  ],
  [Mood_Type.SAD]: [
    "Gapapa nangis, itu manusiawi.",
    "Badai pasti berlalu, peluk jauh!",
    "Istirahatlah, besok kita coba lagi."
  ],
  [Mood_Type.NEUTRAL]: [
    "Hari yang tenang adalah anugerah.",
    "Jalani hari ini dengan santai.",
    "Fokus pada hal kecil yang baik."
  ]
};