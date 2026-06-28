import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={clsx(
        "py-20 md:py-28",
        className
      )}
    >
      {children}
    </section>
  );
}

