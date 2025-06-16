import { useEffect } from "react";
import { create } from "zustand";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("favorites");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("favorites", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

export const useFavoriteStore = create((set) => ({
  /**@type {Array<number>} */
  favorites: [],
  setFavorites: (favorites) =>
    set(() => {
      saveState(favorites);
      return { favorites };
    }),
  toggleFavorite: (id) => {
    set((state) => {
      const favorites = state.favorites.includes(id)
        ? state.favorites.filter((favId) => favId !== id)
        : [...state.favorites, id];

      saveState(favorites);

      return { favorites };
    });
  },
}));
// Custom hook to initialize from localStorage only on client
export const useInitializeFavorites = () => {
  const setFavorites = useFavoriteStore((state) => state.setFavorites);

  useEffect(() => {
    try {
      const serializedState = localStorage.getItem("favorites");
      if (serializedState !== null) {
        const parsed = JSON.parse(serializedState);
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        }
      }
    } catch (err) {
      console.error("Could not load state", err);
    }
  }, [setFavorites]);
};
