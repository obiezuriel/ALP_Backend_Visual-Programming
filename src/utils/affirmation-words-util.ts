import { Mood_Type } from "../../generated/prisma";

export const AFFIRMATION_DATA: Record<Mood_Type, string[]> = {
    [Mood_Type.HAPPY]: [
        "Senyummu menular! Teruslah bersinar.",
        "Nikmati kebahagiaan ini, kamu pantas mendapatkannya.",
        "Energi positifmu luar biasa hari ini.",
        "Kamu hebat! Terus pertahankan semangat ini.",
        "Hari yang indah untuk jiwa yang indah sepertimu.",
        "Kebahagiaanmu menginspirasi orang di sekitarmu.",
        "Terus sebarkan vibes positif ini ya!",
        "Kamu adalah alasan seseorang tersenyum hari ini."
    ],

    [Mood_Type.SAD]: [
        "Gapapa sedih, itu manusiawi.",
        "Badai pasti berlalu, peluk jauh!",
        "Istirahatlah, besok kita coba lagi.",
        "Menangis itu oke, itu cara hatimu untuk healing.",
        "Kamu tidak sendirian, ada yang peduli sama kamu.",
        "Hari ini berat, tapi kamu sudah melakukan yang terbaik.",
        "Take your time, gak harus selalu baik-baik saja.",
        "Setiap hari adalah halaman baru, besok bisa lebih baik."
    ],

    [Mood_Type.NEUTRAL]: [
        "Hari yang tenang adalah anugerah.",
        "Jalani hari ini dengan santai.",
        "Fokus pada hal kecil yang baik.",
        "Sometimes okay is enough. Dan itu perfectly fine.",
        "Nikmati momen tenang ini, recharge energimu.",
        "Hari biasa juga hari yang berharga.",
        "Kamu sudah hadir hari ini, itu sudah pencapaian.",
        "Ambil nafas dalam, kamu sedang melakukan yang terbaik."
    ]
};