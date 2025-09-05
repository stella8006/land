"use client";
import React from "react";

export function Dialog({ open, onOpenChange, children }: any) {
  if (!open) return null;
  return (
    <div
      onClick={() => onOpenChange?.(false)}
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}
export function DialogContent({ className = "", ...p }: any) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-[#0E1B3B] text-white p-4 max-w-xl w-[92vw] ${className}`}
      {...p}
    />
  );
}
export function DialogHeader(p: any) {
  return <div className="mb-2" {...p} />;
}
export function DialogTitle(p: any) {
  return <h2 className="text-lg font-bold text-[#34D399]" {...p} />;
}
export function DialogDescription(p: any) {
  return <p className="text-white/70 text-sm" {...p} />;
}
export default Dialog;
