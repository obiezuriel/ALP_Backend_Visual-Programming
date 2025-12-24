/*
  Warnings:

  - You are about to drop the column `url_audio` on the `meditation_songs` table. All the data in the column will be lost.
  - Added the required column `audio_url` to the `meditation_songs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cover_image` to the `meditation_songs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "meditation_songs" DROP COLUMN "url_audio",
ADD COLUMN     "audio_url" TEXT NOT NULL,
ADD COLUMN     "cover_image" TEXT NOT NULL;
