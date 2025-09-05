"use client";
import React from "react";
export function Badge({ className = "", ...p }: any) {
  return (
    <span
      className={`inline-block px-2 py-1 rounded-full text-xs border ${className}`}
      {...p}
    />
  );
}
export default Badge;
