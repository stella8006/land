// ============================================================================
// app/page.tsx (기본 진입 → /compass 리다이렉트)
// ============================================================================
import { redirect } from "next/navigation";
export default function Page() {
  redirect("/compass");
}
