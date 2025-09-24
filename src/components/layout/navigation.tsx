"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Navigation items data
const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/garden", label: "Garden" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-[var(--portfolio-cream)]/95 backdrop-blur-sm border-b border-gray-200 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="font-bold text-lg hover:text-[var(--portfolio-blue)] transition-colors"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-medium transition-colors",
                  pathname.startsWith(item.href)
                    ? "text-[var(--portfolio-blue)]"
                    : "text-gray-700 hover:text-[var(--portfolio-blue)]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="space-y-1">
              <div
                className={cn(
                  "w-6 h-0.5 bg-gray-600 transition-all duration-300",
                  isMobileMenuOpen && "rotate-45 translate-y-1.5"
                )}
              />
              <div
                className={cn(
                  "w-6 h-0.5 bg-gray-600 transition-all duration-300",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <div
                className={cn(
                  "w-6 h-0.5 bg-gray-600 transition-all duration-300",
                  isMobileMenuOpen && "-rotate-45 -translate-y-1.5"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isMobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg font-medium transition-colors",
                  pathname.startsWith(item.href)
                    ? "text-[var(--portfolio-blue)] bg-[var(--portfolio-blue)]/10"
                    : "text-gray-700 hover:text-[var(--portfolio-blue)] hover:bg-gray-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}