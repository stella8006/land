// ============================================================================
// components/cards/NewsCard.tsx
// ============================================================================
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { NewsItem } from "@/lib/types";

export default function NewsCard({
  item,
  onSave,
}: {
  item: NewsItem;
  onSave: () => void;
}) {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-[#34D399] text-base md:text-lg">
          {item.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-white/80">{item.summary}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <Badge key={t} className="bg-white/10 text-white border-white/10">
              {t}
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
