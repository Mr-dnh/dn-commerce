import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 dark:bg-slate-900">
      <div className="text-center">
        <h1 className="text-7xl font-black">404</h1>

        <h2 className="mt-4 text-2xl font-bold">Page Not Found</h2>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-slate-900 px-6 py-3 text-white">
          Back Home
        </Link>
      </div>
    </main>
  );
}
