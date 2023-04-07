"use client";

import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useColorMode() {
  const [colorMode, setColorMode] = useLocalStorage("color-mode", "light");

  useEffect(() => {
    const body = document.body;
    body.classList.remove(colorMode === "light" ? "dark" : "light");
    body.classList.add(colorMode);
  }, [colorMode]);

  return [colorMode, setColorMode];
}

export default useColorMode;
