"use client";

// export function AuthProviders({ children }: { children: React.ReactNode }) {
//   return <AuthProvider>{children}</AuthProvider>;
// }

import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/context/AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
