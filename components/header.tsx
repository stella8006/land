"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, Map, Compass, Package, BookOpen, Settings2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useProfile } from "@/lib/context/ProfileContext";

export default function Header() {
  const pathname = usePathname();
  const { openOnboarding } = useProfile();
  const Nav = ({
    href,
    icon: Icon,
    label,
  }: {
    href: string;
    icon: any;
    label: string;
  }) => (
    <Link href={href} className="hidden sm:block">
      <Button
        variant="ghost"
        className={`text-white ${pathname === href ? "bg-white/10" : ""}`}
      >
        <Icon className="w-4 h-4 mr-1" /> {label}
      </Button>
    </Link>
  );
  return (
    <header className="sticky top-0 z-40 flex items-center gap-4 px-4 py-3 bg-[#0E1B3B]/90 backdrop-blur border-b border-white/10">
      <div className="flex items-center gap-2">
        <Star className="w-5 h-5 text-[#F9C74F]" />
        <Link
          href="/compass"
          className="text-xl md:text-2xl font-bold text-[#F9C74F]"
        >
          AI보물섬
        </Link>
      </div>
      <nav className="ml-auto flex gap-1">
        <Nav href="/map" icon={Map} label="보물지도" />
        <Nav href="/compass" icon={Compass} label="나침반" />
        <Nav href="/box" icon={Package} label="보물상자" />
        <Nav href="/log" icon={BookOpen} label="항해일지" />
        <Button variant="ghost" className="text-white" onClick={openOnboarding}>
          <Settings2 className="w-4 h-4 mr-1" /> 프로필
        </Button>
      </nav>
    </header>
  );
}
