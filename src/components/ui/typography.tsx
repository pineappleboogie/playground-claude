import { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Typography component props interface
interface TypographyProps {
  children: ReactNode;
  className?: string;
}

// Heading Components
export function H1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "text-5xl md:text-6xl font-bold tracking-tight text-gray-900",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-bold text-gray-900",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn(
        "text-xl md:text-2xl font-semibold text-gray-900",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className }: TypographyProps) {
  return (
    <h4
      className={cn(
        "text-lg font-semibold text-gray-900",
        className
      )}
    >
      {children}
    </h4>
  );
}

// Body Text Components
export function BodyLarge({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-xl md:text-2xl text-gray-600 leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
}

export function BodyText({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-base text-gray-600 leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
}

export function BodySmall({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-sm text-gray-500",
        className
      )}
    >
      {children}
    </p>
  );
}

// Specialized Text Components
export function Subtitle({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-lg text-gray-500",
        className
      )}
    >
      {children}
    </p>
  );
}

export function AccentText({ children, className }: TypographyProps) {
  return (
    <span
      className={cn(
        "text-[var(--portfolio-blue)] font-medium",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Caption({ children, className }: TypographyProps) {
  return (
    <span
      className={cn(
        "text-xs text-gray-400 uppercase tracking-wider",
        className
      )}
    >
      {children}
    </span>
  );
}

// Link Component
interface LinkTextProps extends TypographyProps {
  href?: string;
  external?: boolean;
}

export function LinkText({ children, className, href, external }: LinkTextProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "text-[var(--portfolio-blue)] font-medium hover:text-[var(--portfolio-blue-dark)] transition-colors hover:underline",
        className
      )}
    >
      {children}
    </a>
  );
}