// ============================================================================
// components/cards/KitCard.tsx
// ============================================================================
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Save } from "lucide-react";
import { KitItem } from "@/lib/types";

export default function KitCard({
  kit,
  onOpen,
  onSave,
}: {
  kit: KitItem;
  onOpen: () => void;
  onSave: () => void;
}) {
  return (
    <Card className="bg-white/5 border-white/10">
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
        <p className="text-sm text-white/70">예상 {kit.estTimeMin}분</p>
        <div className="flex gap-2">
          <Button
            size="sm"
            className="bg-[#F9C74F] text-black"
            onClick={onOpen}
          >
            <Play className="w-4 h-4 mr-1" /> 실행
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-white/20 text-white"
            onClick={onSave}
          >
            <Save className="w-4 h-4 mr-1" /> 저장
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
