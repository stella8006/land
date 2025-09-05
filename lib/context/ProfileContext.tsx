"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Profile, LogEntry, KitItem } from "@/lib/types";
import { useLocalStorageState } from "@/lib/hooks/useLocalStorageState";
import { LS_KEYS } from "@/lib/constants";

type Ctx = {
  profile: Profile;
  setProfile: (p: Profile | ((p: Profile) => Profile)) => void;
  log: LogEntry[];
  addLog: (e: LogEntry) => void;
  clearLog: () => void;
  saved: string[];
  saveItem: (type: LogEntry["type"], refId: string, title: string) => void;
  activeKit: KitItem | null;
  openKit: (k: KitItem) => void;
  closeKit: () => void;
  kitKeyword: string;
  setKitKeyword: (v: string) => void;
  copyPrompt: (text: string) => void;
  execActiveKit: () => void;
  showOnboarding: boolean;
  openOnboarding: () => void;
  closeOnboarding: () => void;
};

const C = createContext<Ctx | null>(null);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useLocalStorageState<Profile>(LS_KEYS.profile, {
    role: null,
    interests: [],
  });
  const [log, setLog] = useLocalStorageState<LogEntry[]>(LS_KEYS.log, []);
  const [saved, setSaved] = useLocalStorageState<string[]>(LS_KEYS.saved, []);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [activeKit, setActiveKit] = useState<KitItem | null>(null);
  const [kitKeyword, setKitKeyword] = useState("");

  useEffect(() => {
    if (!profile.role) setShowOnboarding(true);
  }, [profile.role]);

  function addLog(e: LogEntry) {
    setLog((prev) => [e, ...prev].slice(0, 200));
  }
  function clearLog() {
    setLog([]);
  }
  function saveItem(type: LogEntry["type"], refId: string, title: string) {
    if (!saved.includes(`${type}:${refId}`)) {
      setSaved((s) => [`${type}:${refId}`, ...s]);
      addLog({
        id: crypto.randomUUID(),
        type,
        refId,
        title,
        action: "saved",
        ts: Date.now(),
      });
    }
  }
  function openOnboarding() {
    setShowOnboarding(true);
  }
  function closeOnboarding() {
    setShowOnboarding(false);
  }
  function openKit(k: KitItem) {
    setActiveKit(k);
    setKitKeyword("");
  }
  function closeKit() {
    setActiveKit(null);
  }
  function copyPrompt(text: string) {
    navigator.clipboard.writeText(text);
  }
  function execActiveKit() {
    if (activeKit) {
      addLog({
        id: crypto.randomUUID(),
        type: "kit",
        refId: activeKit.id,
        title: activeKit.title,
        action: "executed",
        ts: Date.now(),
      });
      setActiveKit(null);
    }
  }

  const value = useMemo(
    () => ({
      profile,
      setProfile,
      log,
      addLog,
      clearLog,
      saved,
      saveItem,
      activeKit,
      openKit,
      closeKit,
      kitKeyword,
      setKitKeyword,
      copyPrompt,
      execActiveKit,
      showOnboarding,
      openOnboarding,
      closeOnboarding,
    }),
    [profile, log, saved, activeKit, kitKeyword, showOnboarding]
  );

  return <C.Provider value={value}>{children}</C.Provider>;
}
export function useProfile() {
  const ctx = useContext(C);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
}
