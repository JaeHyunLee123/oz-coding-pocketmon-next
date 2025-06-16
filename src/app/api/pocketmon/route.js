/** @typedef {import("../type").PocketmonData} PocketmonData */

import {
  createPocketmonImageUrl,
  createPocketmonSpeciesGetUrl,
} from "@/app/libs/utils";

const MAX_ID = 151;

export async function GET() {
  const numberArray = Array.from({ length: MAX_ID }, (_, i) => i + 1);

  const fetchPocketmonById = async (id) => {
    const response = await fetch(createPocketmonSpeciesGetUrl(id));
    const data = await response.json();

    /**
     * @type {PocketmonData}
     */
    const pocketmonData = {
      id: id,
      name: data.names.find((el) => el.language.name === "ko").name,
      description: data.flavor_text_entries.find(
        (el) => el.language.name === "ko"
      ).flavor_text,
      frontImage: createPocketmonImageUrl({ id, isFront: true }),
      backImage: createPocketmonImageUrl({ id, isFront: false }),
    };

    return pocketmonData;
  };

  const data = await Promise.all(
    numberArray.map((id) => fetchPocketmonById(id))
  );

  return Response.json({ data });
}
