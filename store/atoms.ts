import { atom } from "jotai";
import type { Board } from "./types/board";

// Create a WritableAtom
const boardAtom = atom<Board[]>([]);

export { boardAtom };
