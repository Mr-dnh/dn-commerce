export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-500 py-16 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 h-10 w-64 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl bg-white dark:bg-slate-700">
              <div className="aspect-4/3 animate-pulse bg-slate-300 dark:bg-slate-600" />

              <div className="space-y-3 p-5">
                <div className="h-5 animate-pulse rounded bg-slate-300 dark:bg-slate-600" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-slate-300 dark:bg-slate-600" />
                <div className="h-10 animate-pulse rounded-full bg-slate-300 dark:bg-slate-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
