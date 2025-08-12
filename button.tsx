import * as React from "react";
import { clsx } from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "icon";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", asChild, ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-2xl border text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    const variants = {
      default: "bg-black text-white hover:opacity-90 border-transparent",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 border-transparent dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
      outline: "bg-transparent border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800",
      ghost: "bg-transparent border-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
    } as const;
    const sizes = { sm: "h-9 px-3", md: "h-10 px-4", icon: "h-9 w-9 p-0" } as const;
    const Comp: any = asChild ? "a" : "button";
    return (<Comp ref={ref} className={clsx(base, variants[variant], sizes[size], className)} {...props} />);
  }
);
Button.displayName = "Button";
