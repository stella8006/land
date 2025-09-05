// ============================================================================
// components/KitDialog.tsx
// ============================================================================
"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Copy, Play } from "lucide-react";
import { useProfile } from "@/lib/context/ProfileContext";

export default function KitDialog() {
  const {
    activeKit,
    closeKit,
    kitKeyword,
    setKitKeyword,
    profile,
    copyPrompt,
    execActiveKit,
  } = useProfile();
  if (!activeKit) return null;
  const preview = activeKit.prompt
    .replace("{{키워드}}", kitKeyword || "[키워드]")
    .replace("{{직무}}", profile.role || "[직무]")
    .replace("{{뉴스본문}}", "[뉴스 본문]");
  return (
    <Dialog open={!!activeKit} onOpenChange={(v) => !v && closeKit()}>
      <DialogContent className="bg-[#0E1B3B] text-white border border-white/10 max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-[#34D399]">
            {activeKit.title}
          </DialogTitle>
          <DialogDescription className="text-white/70">
            예상 {activeKit.estTimeMin}분 · 실행 키트
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {activeKit.roleFit.map((r) => (
            <Badge
              key={r}
              variant="secondary"
              className="bg-white/10 text-white border-white/10"
            >
              {r}
            </Badge>
          ))}
          {activeKit.interests.map((t) => (
            <Badge
              key={t}
              className="bg-[#F9C74F]/20 text-[#F9C74F] border border-[#F9C74F]/30"
            >
              {t}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Input
            placeholder="키워드(예: 생산성 앱, 디자인 시스템)"
            value={kitKeyword}
            onChange={(e) => setKitKeyword(e.target.value)}
            className="bg-white/10 text-white placeholder:text-white/50 border-white/10"
          />
          {profile.role && (
            <Input
              disabled
              value={`직무: ${profile.role}`}
              className="bg-white/10 text-white border-white/10"
            />
          )}
        </div>
        <div>
          <p className="mb-1 text-sm text-white/80">프롬프트 미리보기</p>
          <div className="bg-black/30 rounded-lg p-3 border border-white/10 text-sm whitespace-pre-wrap">
            {preview}
          </div>
          <div className="flex gap-2 mt-2">
            <Button
              className="bg-[#F9C74F] text-black"
              onClick={() => copyPrompt(preview)}
            >
              <Copy className="w-4 h-4 mr-1" /> 프롬프트 복사
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white"
              onClick={execActiveKit}
            >
              <Play className="w-4 h-4 mr-1" /> 실행 완료 기록
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
