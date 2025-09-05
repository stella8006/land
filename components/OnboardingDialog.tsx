// ============================================================================
// components/OnboardingDialog.tsx
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
import { Input } from "@/components/ui/input";
import { useProfile } from "@/lib/context/ProfileContext";
import { ROLES, INTERESTS } from "@/lib/constants";

export default function OnboardingDialog() {
  const { showOnboarding, closeOnboarding, profile, setProfile } = useProfile();
  return (
    <Dialog open={showOnboarding} onOpenChange={(v) => !v && closeOnboarding()}>
      <DialogContent className="bg-[#0E1B3B] text-white border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-[#F9C74F]">나침반 설정</DialogTitle>
          <DialogDescription className="text-white/70">
            직무와 관심사를 선택하면 더 정확한 추천을 받을 수 있어요.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <p className="mb-2 text-sm text-white/80">직무 선택</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {ROLES.map((r) => (
                <Button
                  key={r}
                  variant={profile.role === r ? "default" : "outline"}
                  className={
                    profile.role === r
                      ? "bg-[#34D399] text-black"
                      : "border-white/20 text-white"
                  }
                  onClick={() => setProfile({ ...profile, role: r })}
                >
                  {r}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm text-white/80">관심사 선택 (최대 3개)</p>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((tag) => {
                const selected = profile.interests.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => {
                      setProfile((p) => {
                        const has = p.interests.includes(tag);
                        let next = has
                          ? p.interests.filter((x) => x !== tag)
                          : [...p.interests, tag];
                        if (next.length > 3) next = next.slice(1);
                        return { ...p, interests: next };
                      });
                    }}
                    className={`px-3 py-1 rounded-full text-sm border transition ${
                      selected
                        ? "bg-[#F9C74F] text-black border-[#F9C74F]"
                        : "bg-white/5 text-white border-white/20"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              className="border-white/20 text-white"
              onClick={closeOnboarding}
            >
              나중에
            </Button>
            <Button
              className="bg-[#F9C74F] text-black"
              onClick={closeOnboarding}
            >
              저장
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
