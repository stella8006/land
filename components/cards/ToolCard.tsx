// ============================================================================
// components/cards/ToolCard.tsx
// ============================================================================
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { ToolItem } from "@/lib/types";

export default function ToolCard({
  item,
  onSave,
}: {
  item: ToolItem;
  onSave: () => void;
}) {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader className="pb-2">
        <CardTitle className="text-[#34D399] text-base md:text-lg">
          {item.name}{" "}
          <span className="text-white/60 text-sm">
            · {item.kind} · {item.difficulty}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((g) => (
            <Badge key={g} className="bg-white/10 text-white border-white/10">
              {g}
            </Badge>
          ))}
        </div>
        <Button
          size="sm"
          variant="outline"
          className="border-white/20 text-white"
          onClick={onSave}
        >
          <Save className="w-4 h-4 mr-1" /> 저장
        </Button>
      </CardContent>
    </Card>
  );
}
