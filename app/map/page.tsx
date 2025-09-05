// ============================================================================
// app/map/page.tsx — 보물지도(탐색)
// ============================================================================
"use client";
import { Input } from "@/components/ui/input";
import { Map, Package } from "lucide-react";
import { NEWS, TOOLS } from "@/lib/data";
import { useState, useMemo } from "react";
import { useProfile } from "@/lib/context/ProfileContext";
import NewsCard from "@/components/cards/NewsCard";
import ToolCard from "@/components/cards/ToolCard";

export default function MapPage() {
  const { saveItem } = useProfile();
  const [q, setQ] = useState("");
  const filteredNews = useMemo(() => {
    const s = q.toLowerCase();
    return NEWS.filter((n) =>
      [n.title, n.summary, n.tags.join(" ")].some((f) =>
        f.toLowerCase().includes(s)
      )
    );
  }, [q]);
  const filteredTools = useMemo(() => {
    const s = q.toLowerCase();
    return TOOLS.filter((t) =>
      [t.name, t.tags.join(" ")].some((f) => f.toLowerCase().includes(s))
    );
  }, [q]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Map className="w-5 h-5 text-[#34D399]" /> AI 뉴스 피드
        </h2>
        <div className="mb-3">
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="뉴스/툴 검색"
            className="bg-white/10 text-white border-white/10"
          />
        </div>
        <div className="space-y-4">
          {filteredNews.map((n) => (
            <NewsCard
              key={n.id}
              item={n}
              onSave={() => saveItem("news", n.id, n.title)}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Package className="w-5 h-5 text-[#34D399]" /> 신규 툴/모델
        </h2>
        <div className="space-y-4">
          {filteredTools.map((t) => (
            <ToolCard
              key={t.id}
              item={t}
              onSave={() => saveItem("tool", t.id, t.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
