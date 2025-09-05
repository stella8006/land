// ============================================================================
// lib/types.ts
// ============================================================================
export type Role = "마케터" | "개발자" | "디자이너" | "기획자" | "경영진";
export type Profile = { role: Role | null; interests: string[] };
export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  link?: string;
};
export type ToolItem = {
  id: string;
  name: string;
  kind: "툴" | "모델";
  difficulty: "입문" | "중급" | "고급";
  tags: string[];
  link?: string;
};
export type KitItem = {
  id: string;
  title: string;
  roleFit: Role[];
  interests: string[];
  prompt: string;
  steps: string[];
  estTimeMin: number;
};
export type LogEntry = {
  id: string;
  type: "kit" | "news" | "tool";
  refId: string;
  title: string;
  action: "saved" | "executed";
  ts: number;
};
