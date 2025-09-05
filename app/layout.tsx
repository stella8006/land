// ============================================================================
// app/layout.tsx
// ============================================================================
"use client";

import { ReactNode } from "react";
import { ProfileProvider } from "@/lib/context/ProfileContext";
import Header from "@/components/Header";
import "./globals.css"; // Tailwind 포함 가정

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-[#0E1B3B] text-white">
        <ProfileProvider>
          <Header />
          <main className="p-4 md:p-6 max-w-7xl mx-auto">{children}</main>
        </ProfileProvider>
      </body>
    </html>
  );
}
