import Link from "next/link";
import { HomeHero } from "@/components/portfolio/hero";
import { CaseStudyCard, type CaseStudyData } from "@/components/portfolio/case-study-card";
import { H2, H3, BodyText, BodySmall, LinkText } from "@/components/ui/typography";

export default function Home() {
  // Sample data - in Phase 4 we'll move this to a proper data structure
  const featuredWork: CaseStudyData[] = [
    {
      id: "magic-ads",
      title: "Magic Ads",
      description: "AI-powered advertising optimization platform that helps businesses create more effective campaigns through intelligent automation.",
      year: "2024",
      category: "Product Design",
      featured: true,
    },
    {
      id: "coming-soon-1",
      title: "Project Two",
      description: "Coming soon - another exciting case study showcasing user research and design thinking.",
      year: "2024",
      category: "UX Design",
    },
    {
      id: "coming-soon-2",
      title: "Project Three",
      description: "Coming soon - mobile app design project focused on accessibility and inclusive design.",
      year: "2023",
      category: "Mobile Design",
    },
  ];

  const gardenPosts = [
    {
      slug: "learning-react-as-designer",
      title: "Learning React as a Designer",
      excerpt: "My journey from Figma to code and what I learned along the way...",
      date: "Dec 2024",
      readTime: "5 min",
    },
    {
      slug: "design-systems-in-code",
      title: "Design Systems in Code",
      excerpt: "Building consistent components that bridge design and development...",
      date: "Nov 2024",
      readTime: "8 min",
    },
    {
      slug: "mobile-first-thinking",
      title: "Mobile-First Thinking",
      excerpt: "Why starting small leads to better user experiences...",
      date: "Oct 2024",
      readTime: "6 min",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HomeHero
        name="[Your Name]"
        role="Product Designer"
        company="[Company]"
        location="[Location]"
      />

      {/* Featured Work Carousel */}
      <section className="py-12 md:py-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-12">
            <div className="mb-4 md:mb-0">
              <H2 className="mb-2 md:mb-4">Featured Work</H2>
              <BodyText>Case studies showcasing problem-solving through design</BodyText>
            </div>
            <LinkText href="/work" className="hidden md:inline">
              View All Work →
            </LinkText>
          </div>

          {/* Mobile: Stacked, Desktop: Horizontal carousel */}
          <div className="flex flex-col gap-6 md:flex-row md:gap-8 md:overflow-x-auto md:pb-4 scrollbar-hide">
            {featuredWork.map((project) => (
              <CaseStudyCard
                key={project.id}
                caseStudy={project}
                variant="featured"
                className="md:flex-none md:w-80"
              />
            ))}
          </div>

          {/* Mobile-only View All link */}
          <div className="mt-8 text-center md:hidden">
            <LinkText href="/work" className="inline-flex items-center gap-2">
              View All Work →
            </LinkText>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <H2 className="mb-8 md:mb-12 text-center">Experience</H2>

          <div className="space-y-8">
            {/* Current Role */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/4">
                <BodySmall className="font-medium">2024 - Present</BodySmall>
              </div>
              <div className="md:w-3/4">
                <H3 className="mb-2 text-xl">[Current Job Title]</H3>
                <BodyText className="text-[var(--portfolio-blue)] font-medium mb-3">
                  [Current Company]
                </BodyText>
                <BodyText>
                  Leading product design initiatives, creating user-centered experiences,
                  and collaborating with cross-functional teams to deliver impactful solutions.
                </BodyText>
              </div>
            </div>

            {/* Previous Role */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/4">
                <BodySmall className="font-medium">2022 - 2024</BodySmall>
              </div>
              <div className="md:w-3/4">
                <H3 className="mb-2 text-xl">[Previous Job Title]</H3>
                <BodyText className="text-[var(--portfolio-blue)] font-medium mb-3">
                  [Previous Company]
                </BodyText>
                <BodyText>
                  Designed and shipped multiple product features, conducted user research,
                  and established design systems that improved team efficiency by 40%.
                </BodyText>
              </div>
            </div>

            {/* Earlier Role */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/4">
                <BodySmall className="font-medium">2020 - 2022</BodySmall>
              </div>
              <div className="md:w-3/4">
                <H3 className="mb-2 text-xl">[Earlier Job Title]</H3>
                <BodyText className="text-[var(--portfolio-blue)] font-medium mb-3">
                  [Earlier Company]
                </BodyText>
                <BodyText>
                  Started my design career focusing on user interface design and
                  learning the fundamentals of user experience design.
                </BodyText>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garden Preview Section */}
      <section className="py-12 md:py-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-12">
            <div className="mb-4 md:mb-0">
              <H2 className="mb-2 md:mb-4">From the Garden</H2>
              <BodyText>Recent thoughts and learnings</BodyText>
            </div>
            <LinkText href="/garden" className="hidden md:inline">
              Visit Full Garden →
            </LinkText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {gardenPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/garden/${post.slug}`}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-[var(--portfolio-blue)]/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <BodySmall>{post.date}</BodySmall>
                    <span className="text-gray-400">•</span>
                    <BodySmall>{post.readTime}</BodySmall>
                  </div>
                </div>

                <H3 className="text-lg mb-3 group-hover:text-[var(--portfolio-blue)] transition-colors">
                  {post.title}
                </H3>

                <BodyText className="text-sm">
                  {post.excerpt}
                </BodyText>
              </Link>
            ))}
          </div>

          {/* Mobile-only Visit Full Garden link */}
          <div className="mt-8 text-center md:hidden">
            <LinkText href="/garden" className="inline-flex items-center gap-2">
              Visit Full Garden →
            </LinkText>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500">
          Built with Next.js 15 & Tailwind CSS • Designed & Developed by [Your Name]
        </p>
      </footer>
    </div>
  );
}
