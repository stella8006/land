// ============================================================================
// app/page.tsx (기본 진입 → /compass 리다이렉트)
// ============================================================================
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/compass");
  }, [router]);
  return null;
}
