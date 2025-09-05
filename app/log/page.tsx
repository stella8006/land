// ============================================================================
// app/log/page.tsx — 항해일지(기록)
// ============================================================================ — 항해일지(기록)
// ============================================================================
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { useProfile } from "@/lib/context/ProfileContext";

export default function LogPage() {
  const { log, clearLog } = useProfile();
  return (
    <section>
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-[#34D399]" /> 항해일지
      </h2>
      {log.length === 0 ? (
        <p className="text-white/70">
          아직 기록이 없어요. 저장하거나 실행해보세요.
        </p>
      ) : (
        <div className="space-y-3">
          {log.map((e) => (
            <Card key={e.id} className="bg-white/5 border-white/10">
              <CardContent className="py-3 px-4 flex items-center justify-between">
                <div>
                  <p className="text-white/90 text-sm md:text-base">
                    [{e.type}] {e.title}
                  </p>
                  <p className="text-white/60 text-xs">
                    {new Date(e.ts).toLocaleString()}
                  </p>
                </div>
                <Badge
                  className={
                    e.action === "executed"
                      ? "bg-[#34D399] text-black"
                      : "bg-white/10 text-white border-white/10"
                  }
                >
                  {e.action === "executed" ? "실행" : "저장"}
                </Badge>
              </CardContent>
            </Card>
          ))}
          <button
            onClick={clearLog}
            className="text-sm text-white/70 underline"
          >
            로그 비우기
          </button>
        </div>
      )}
    </section>
  );
}
