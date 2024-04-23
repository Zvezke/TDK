"use client";

// export function AuthProviders({ children }: { children: React.ReactNode }) {
//   return <AuthProvider>{children}</AuthProvider>;
// }

import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/context/AuthContext";
import StoreProvider from "@/store/StoreProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        <StoreProvider>{children}</StoreProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
