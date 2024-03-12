"use client";

// import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const FiSun = () => {
    return (
      <Image
        src="/images/darkMode.svg"
        alt="Icon for light mode"
        width={20}
        height={20}
      />
    );
  };

  const FiMoon = () => {
    return (
      <Image
        src="/images/lightMode.svg"
        alt="Icon for dark mode"
        width={20}
        height={20}
      />
    );
  };

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-200 border-t-transparent"></div>
    );

  if (resolvedTheme === "dark") {
    return (
      <button
        className="flex items-center justify-center"
        onClick={() => setTheme("light")}
      >
        <FiSun />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        className="flex items-center justify-center"
        onClick={() => setTheme("dark")}
      >
        <FiMoon />
      </button>
    );
  }
}
