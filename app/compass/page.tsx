// ============================================================================
// app/compass/page.tsx — 나침반(추천)
// ============================================================================ — 나침반(추천)
// ============================================================================
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Compass, Play, Save } from "lucide-react";
import { useRecommendations } from "@/lib/hooks/useRecommendations";
import { useProfile } from "@/lib/context/ProfileContext";

export default function CompassPage() {
  const { profile, openKit, saveItem } = useProfile();
  const kits = useRecommendations();
  return (
    <section>
      <h2 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
        <Compass className="w-5 h-5 text-[#34D399]" /> 오늘의 추천{" "}
        {profile.role && (
          <span className="text-white/70 text-sm">— {profile.role} 맞춤</span>
        )}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {kits.slice(0, 3).map((kit) => (
          <Card key={kit.id} className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-[#34D399] text-base md:text-lg">
                {kit.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {kit.roleFit.map((r) => (
                  <Badge
                    key={r}
                    variant="secondary"
                    className="bg-white/10 text-white border-white/10"
                  >
                    {r}
                  </Badge>
                ))}
                {kit.interests.map((t) => (
                  <Badge
                    key={t}
                    className="bg-[#F9C74F]/20 text-[#F9C74F] border border-[#F9C74F]/30"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-white/70">
                예상 {kit.estTimeMin}분 · 실행 중심 키트
              </p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="bg-[#F9C74F] text-black"
                  onClick={() => openKit(kit)}
                >
                  <Play className="w-4 h-4 mr-1" /> 실행
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white"
                  onClick={() => saveItem("kit", kit.id, kit.title)}
                >
                  <Save className="w-4 h-4 mr-1" /> 저장
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
