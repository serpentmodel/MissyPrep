import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import { companies, getSampleQuestions, roles } from "@/data/homepage";

type PlanSearchParams = { role?: string; company?: string };

function resolveSelection(params: PlanSearchParams) {
  const role = roles.find((r) => r.id === params.role) ?? roles[0];
  const company = companies.find((c) => c.id === params.company) ?? companies[0];
  return { role, company };
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<PlanSearchParams>;
}): Promise<Metadata> {
  const { role, company } = resolveSelection(await searchParams);
  return {
    title: `${role.title} @ ${company.name} — Dataford`,
    description: `Your personalized Dataford interview prep plan for ${role.title} at ${company.name}.`,
  };
}

export default async function PlanPage({
  searchParams,
}: {
  searchParams: Promise<PlanSearchParams>;
}) {
  const { role, company } = resolveSelection(await searchParams);
  const questions = getSampleQuestions(role, company.name);

  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-black">
      <header className="border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/80">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            Dataford
          </Link>
          <Link
            href="/#plan"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Edit role & company
          </Link>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-400">
            Your personalized plan
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {role.title} @ {company.name}
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">{role.blurb}</p>
        </div>

        <section className="rounded-2xl border border-black/10 bg-zinc-50 p-6 dark:border-white/10 dark:bg-zinc-900/60">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <Sparkles className="h-4 w-4 text-amber-500" />
            Exact questions you can expect
          </div>
          <ol className="flex flex-col gap-3">
            {questions.map((question, i) => (
              <li
                key={question}
                className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-[11px] font-semibold text-white dark:bg-white dark:text-zinc-900">
                  {i + 1}
                </span>
                &ldquo;{question}&rdquo;
              </li>
            ))}
          </ol>
        </section>

        <div className="flex flex-col items-center gap-4 rounded-2xl bg-zinc-900 px-8 py-10 text-center dark:bg-white">
          <p className="text-lg font-semibold text-white dark:text-zinc-900">
            Want a plan for a different role or company?
          </p>
          <Link
            href="/#plan"
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-700"
          >
            Build another plan
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
