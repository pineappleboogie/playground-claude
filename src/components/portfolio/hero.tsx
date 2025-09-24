import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { H1, BodyLarge, Subtitle } from "@/components/ui/typography";

interface HeroProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  description?: string | ReactNode;
  actions?: ReactNode;
  centered?: boolean;
  className?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  actions,
  centered = true,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "py-20 px-8",
        className
      )}
    >
      <div
        className={cn(
          "max-w-6xl mx-auto",
          centered && "text-center"
        )}
      >
        {/* Title */}
        <H1 className="mb-6">
          {title}
        </H1>

        {/* Subtitle (larger text) */}
        {subtitle && (
          <BodyLarge className={cn(
            "mb-4 max-w-3xl",
            centered && "mx-auto"
          )}>
            {subtitle}
          </BodyLarge>
        )}

        {/* Description (smaller text) */}
        {description && (
          <Subtitle className={cn(
            "max-w-2xl",
            centered && "mx-auto",
            subtitle ? "mt-4" : "mt-6"
          )}>
            {description}
          </Subtitle>
        )}

        {/* Action buttons or content */}
        {actions && (
          <div className={cn(
            "mt-8",
            centered && "flex justify-center"
          )}>
            {actions}
          </div>
        )}
      </div>
    </section>
  );
}

// Specialized Hero variants for common use cases
export function HomeHero({
  name,
  role,
  company,
  location,
  className,
}: {
  name: string;
  role: string;
  company?: string;
  location?: string;
  className?: string;
}) {
  const companyText = company ? `Currently designing at ${company}` : "";
  const locationText = location ? `Based in ${location}` : "";
  const previousText = company ? "Previously at [Company]" : "";

  const subtitleParts = [companyText, previousText, locationText].filter(Boolean);
  const subtitle = subtitleParts.join(" • ");

  return (
    <Hero
      title={`Hi, I'm ${name}`}
      subtitle={`${role} crafting thoughtful digital experiences that solve real problems.`}
      description={subtitle}
      className={className}
    />
  );
}

export function PageHero({
  title,
  description,
  breadcrumb,
  className,
}: {
  title: string;
  description?: string;
  breadcrumb?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "py-16 px-8 border-b border-gray-200",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">
        {breadcrumb && (
          <div className="mb-4">
            {breadcrumb}
          </div>
        )}

        <H1 className="mb-4">
          {title}
        </H1>

        {description && (
          <BodyLarge className="text-gray-600 max-w-3xl">
            {description}
          </BodyLarge>
        )}
      </div>
    </section>
  );
}