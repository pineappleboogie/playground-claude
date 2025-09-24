export default function GardenPage() {
  return (
    <div className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Digital Garden</h1>
        <p className="text-gray-600">Thoughts, learnings, and explorations in design and development</p>
      </header>

      <main>
        <div className="space-y-6">
          {/* Placeholder for garden posts */}
          <article className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold mb-2">Learning React as a Designer</h3>
            <p className="text-gray-600 mb-2">My journey from Figma to code...</p>
            <time className="text-sm text-gray-500">Coming soon</time>
          </article>

          <article className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold mb-2">Design Systems in Code</h3>
            <p className="text-gray-600 mb-2">Building consistent components...</p>
            <time className="text-sm text-gray-500">Coming soon</time>
          </article>
        </div>
      </main>
    </div>
  );
}