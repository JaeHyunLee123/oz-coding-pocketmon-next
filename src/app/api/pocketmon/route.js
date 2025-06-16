/** @typedef {import("../type").PocketmonData} PocketmonData */

import { fetchPocketmonById } from "@/libs/utils";

const MAX_ID = 151;

export async function GET() {
  const numberArray = Array.from({ length: MAX_ID }, (_, i) => i + 1);

  const data = await Promise.all(
    numberArray.map((id) => fetchPocketmonById(id))
  );

  return Response.json({ data });
}
