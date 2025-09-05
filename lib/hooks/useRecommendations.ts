// ============================================================================
// lib/hooks/useRecommendations.ts
// ============================================================================
"use client";
import { useMemo } from "react";
import { KITS } from "@/lib/data";
import { useProfile } from "@/lib/context/ProfileContext";
export function useRecommendations() {
  const { profile } = useProfile();
  return useMemo(() => {
    const ints = new Set(profile.interests);
    return KITS.map((k) => ({
      item: k,
      score:
        (profile.role && k.roleFit.includes(profile.role) ? 2 : 0) +
        k.interests.reduce((a, t) => a + (ints.has(t) ? 1 : 0), 0),
    }))
      .sort((a, b) => b.score - a.score)
      .map((x) => x.item);
  }, [profile]);
}
