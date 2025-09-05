"use client";
import React from "react";
export function Input({
  className = "",
  ...p
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-md bg:white/10 bg-white/10 text-white placeholder-white/50 border border-white/10 px-3 py-2 ${className}`}
      {...p}
    />
  );
}
export default Input;
