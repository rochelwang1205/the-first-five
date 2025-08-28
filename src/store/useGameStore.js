import { create } from "zustand";

export const useGameStore = create((set, get) => ({
  choices: { 1: null, 2: null, 3: null, 4: null },
  setChoice: (id, key) => set(state => ({
    choices: { ...state.choices, [id]: key }
  })),
  reset: () => set({ choices: { 1: null, 2: null, 3: null, 4: null } }),
}));
