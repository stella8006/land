"use client";
import React from "react";
export function Card({ className = "", ...p }: any) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-white/5 ${className}`}
      {...p}
    />
  );
}
export function CardHeader({ className = "", ...p }: any) {
  return <div className={`p-4 ${className}`} {...p} />;
}
export function CardTitle({ className = "", ...p }: any) {
  return <h3 className={`font-semibold ${className}`} {...p} />;
}
export function CardContent({ className = "", ...p }: any) {
  return <div className={`p-4 pt-0 ${className}`} {...p} />;
}
export default Card;
