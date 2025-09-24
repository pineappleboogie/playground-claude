interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 capitalize">
          {slug.replace('-', ' ')} Case Study
        </h1>
        <p className="text-gray-600">
          Detailed case study for {slug}
        </p>
      </header>

      <main className="max-w-4xl">
        {slug === 'magic-ads' ? (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                Magic Ads is an AI-powered advertising optimization platform that helps businesses
                create more effective ad campaigns through intelligent automation and data-driven insights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
              <p className="text-gray-700 leading-relaxed">
                Small businesses struggle with complex ad platforms and lack the expertise
                to optimize their advertising spend effectively.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Solution</h2>
              <p className="text-gray-700 leading-relaxed">
                We designed an intuitive interface that abstracts complexity while providing
                powerful AI-driven recommendations for campaign optimization.
              </p>
            </section>

            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-sm text-gray-600">
                📝 Full case study content will be added in Phase 4: Content Management
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Case Study: {slug}</h2>
            <p className="text-gray-600">This case study is coming soon!</p>
          </div>
        )}
      </main>
    </div>
  );
}