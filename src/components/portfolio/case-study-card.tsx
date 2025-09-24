import Link from "next/link";
import { cn } from "@/lib/utils";
import { H3, BodyText, Caption } from "@/components/ui/typography";

export interface CaseStudyData {
  id: string;
  title: string;
  description: string;
  year: string;
  category: string;
  image?: string;
  featured?: boolean;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudyData;
  variant?: "default" | "compact" | "featured";
  className?: string;
}

export function CaseStudyCard({
  caseStudy,
  variant = "default",
  className,
}: CaseStudyCardProps) {
  const { id, title, description, year, category, image, featured } = caseStudy;

  if (variant === "compact") {
    return (
      <Link
        href={`/work/${id}`}
        className={cn(
          "group block border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[var(--portfolio-blue)]/30 bg-white",
          className
        )}
      >
        <div className="flex justify-between items-start mb-3">
          <H3 className="group-hover:text-[var(--portfolio-blue)] transition-colors text-lg">
            {title}
          </H3>
          <Caption className="text-gray-400">
            {year}
          </Caption>
        </div>

        <Caption className="text-[var(--portfolio-blue)] mb-2">
          {category}
        </Caption>

        <BodyText className="text-sm">
          {description}
        </BodyText>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={`/work/${id}`}
        className={cn(
          "group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[var(--portfolio-blue)]/30",
          featured && "ring-2 ring-[var(--portfolio-blue)]/20",
          className
        )}
      >
        {/* Project Image */}
        <div className="h-48 md:h-48 bg-gray-100 relative overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={`${title} case study`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--portfolio-blue)]/20 to-[var(--portfolio-blue)]/5 flex items-center justify-center">
              <span className="text-gray-400 font-medium">Project Image</span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <Caption className="text-gray-700">
              {category}
            </Caption>
          </div>

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 right-4 bg-[var(--portfolio-blue)] text-white px-3 py-1 rounded-full">
              <Caption className="text-white">
                Featured
              </Caption>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <H3 className="group-hover:text-[var(--portfolio-blue)] transition-colors">
              {title}
            </H3>
            <Caption className="text-gray-500">
              {year}
            </Caption>
          </div>

          <BodyText className="leading-relaxed">
            {description}
          </BodyText>

          {/* Read More Indicator */}
          <div className="mt-4 flex items-center text-[var(--portfolio-blue)] text-sm font-medium group-hover:gap-2 transition-all">
            <span>View Case Study</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link
      href={`/work/${id}`}
      className={cn(
        "group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[var(--portfolio-blue)]/30",
        className
      )}
    >
      {/* Project Image */}
      <div className="h-64 bg-gray-100 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={`${title} case study`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--portfolio-blue)]/20 to-[var(--portfolio-blue)]/5 flex items-center justify-center">
            <span className="text-gray-400 font-medium">Project Image</span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <Caption className="text-gray-700">
            {category}
          </Caption>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <H3 className="group-hover:text-[var(--portfolio-blue)] transition-colors">
            {title}
          </H3>
          <Caption className="text-gray-500">
            {year}
          </Caption>
        </div>

        <BodyText className="mb-4">
          {description}
        </BodyText>

        {/* Read More Indicator */}
        <div className="flex items-center text-[var(--portfolio-blue)] text-sm font-medium group-hover:gap-2 transition-all">
          <span>View Case Study</span>
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}