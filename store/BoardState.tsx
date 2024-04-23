"use client";
import React, { useRef } from "react";

import { useStore } from "jotai";
import { boardAtom } from "./atoms";
import type { Board } from "./types/board";

interface BoardStateProps {
  children: React.ReactNode;
  data: Board[];
}

const BoardState = ({ children, data: supabaseBoard }: BoardStateProps) => {
  const store = useStore();
  const loaded = useRef(false);
  if (!loaded.current) {
    store.set(boardAtom, supabaseBoard);
    loaded.current = true;
  }
  return <>{children}</>;
};

export default BoardState;
