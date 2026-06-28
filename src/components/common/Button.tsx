import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-8 py-4 font-semibold transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-emerald-400",
        {
          "bg-emerald-400 text-black hover:bg-emerald-300":
            variant === "primary",

          "border border-white/10 bg-white/5 text-white hover:bg-white/10":
            variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}