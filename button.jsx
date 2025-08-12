import React from "react";
export function Button({ children, className = "", variant = "default", size = "md", ...props }) {
  const variants = {
    default: "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200",
    outline: "border border-zinc-300 text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900",
    ghost: "text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-900"
  };
  const sizes = {
    md: "px-4 py-2 text-sm rounded-2xl",
    icon: "p-2 rounded-2xl"
  };
  return (
    <button className={`${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`} {...props}>
      {children}
    </button>
  );
}
