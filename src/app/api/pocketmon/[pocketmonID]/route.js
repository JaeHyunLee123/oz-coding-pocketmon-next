/** @typedef {import("../type").PocketmonData} PocketmonData */

import { fetchPocketmonById } from "@/libs/utils";

export async function GET(request) {
  const splitedURL = request.url.split("/");

  const pocketmonID = splitedURL[splitedURL.length - 1];

  const data = await fetchPocketmonById(pocketmonID);

  return Response.json({ data });
}
