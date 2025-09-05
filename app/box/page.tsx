// ============================================================================
// app/box/page.tsx — 보물상자(실행)
// ============================================================================
"use client";
import { Input } from "@/components/ui/input";
import { Package } from "lucide-react";
import { useState, useMemo } from "react";
import { KITS } from "@/lib/data";
import { useProfile } from "@/lib/context/ProfileContext";
import KitCard from "@/components/cards/KitCard";

export default function BoxPage() {
  const { openKit, saveItem } = useProfile();
  const [q, setQ] = useState("");
  const kits = useMemo(
    () => KITS.filter((k) => k.title.toLowerCase().includes(q.toLowerCase())),
    [q]
  );
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Package className="w-5 h-5 text-[#34D399]" /> 보물상자
        </h2>
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="보물상자 검색"
          className="w-64 bg-white/10 text-white border-white/10"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {kits.map((kit) => (
          <KitCard
            key={kit.id}
            kit={kit}
            onOpen={() => openKit(kit)}
            onSave={() => saveItem("kit", kit.id, kit.title)}
          />
        ))}
      </div>
    </section>
  );
}
