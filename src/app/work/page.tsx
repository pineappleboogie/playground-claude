export default function WorkPage() {
  return (
    <div className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">My Work</h1>
        <p className="text-gray-600">Product design case studies and projects</p>
      </header>

      <main>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder for case study cards */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Magic Ads</h3>
            <p className="text-sm text-gray-600">AI-powered advertising optimization platform</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 opacity-50">
            <h3 className="font-semibold mb-2">Coming Soon</h3>
            <p className="text-sm text-gray-600">More case studies in development</p>
          </div>
        </div>
      </main>
    </div>
  );
}