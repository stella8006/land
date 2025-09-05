"use client";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md";
};
export function Button({
  variant = "default",
  size = "md",
  className = "",
  ...rest
}: Props) {
  const base = "inline-flex items-center justify-center rounded-md px-3 py-2";
  const sizes = size === "sm" ? "text-sm" : "text-base";
  const variants = {
    default: "bg-[#F9C74F] text-black",
    outline: "border border-white/20 text-white bg-transparent",
    ghost: "text-white bg-transparent",
  }[variant];
  return (
    <button className={`${base} ${sizes} ${variants} ${className}`} {...rest} />
  );
}
export default Button;
