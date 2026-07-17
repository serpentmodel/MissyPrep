import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/80">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Dataford
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400 sm:flex">
          <Link href="/#roles" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Roles
          </Link>
          <Link href="/#companies" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Companies
          </Link>
          <Link href="/#features" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            How it works
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/guides"
            className="hidden rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-white/10 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100 sm:block"
          >
            Interview guides
          </Link>
          <Link
            href="/#plan"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Build my plan
          </Link>
        </div>
      </nav>
    </header>
  );
}
