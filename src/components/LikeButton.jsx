"use client";

import {
  useFavoriteStore,
  useInitializeFavorites,
} from "@/hooks/useFavoriteStore";
import Heart from "./icons/Heart";

export default function LikeButton({ pocketmonID }) {
  useInitializeFavorites(); // Load state from localStorage on mount

  const favorites = useFavoriteStore((state) => state.favorites);
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);

  const isFilled = favorites.includes(pocketmonID);

  return (
    <button onClick={() => toggleFavorite(pocketmonID)}>
      <Heart
        className="hover:cursor-pointer"
        fill={isFilled ? "red" : "none"}
      />
    </button>
  );
}
