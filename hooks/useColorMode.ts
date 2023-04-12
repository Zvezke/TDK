"use client";

import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useColorMode() {
  const [colorMode, setColorMode] = useLocalStorage("color-mode", "light");

  useEffect(() => {
    if (colorMode) {
      const body = document.body;
      body.classList.remove(colorMode === "light" ? "dark" : "light");
      body.classList.add(colorMode);
    }
  }, [colorMode]);

  return [colorMode || "light", setColorMode];
}

export default useColorMode;
