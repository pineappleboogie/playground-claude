interface GardenPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function GardenPostPage({ params }: GardenPostPageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen p-8">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 capitalize">
            {slug.replace('-', ' ')}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time>December 2024</time>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        <main className="prose prose-lg">
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Garden Post: {slug}</h2>
            <p className="text-gray-600">
              This garden post is coming soon! It will contain thoughts and learnings
              about design, development, and the creative process.
            </p>
          </div>
        </main>
      </article>
    </div>
  );
}