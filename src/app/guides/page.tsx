import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { companies, roles } from "@/data/homepage";
import { roleIcons } from "@/lib/roleIcons";

export const metadata: Metadata = {
  title: "Interview Guides — Dataford",
  description:
    "Browse Dataford's interview guides by role and by company, or build a personalized plan for your exact combination.",
};

const companiesByCategory = companies.reduce<Record<string, typeof companies>>(
  (acc, company) => {
    (acc[company.category] ??= []).push(company);
    return acc;
  },
  {}
);

export default function GuidesPage() {
  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-black">
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        <section className="flex flex-col items-center gap-4 px-6 pb-12 pt-16 text-center sm:pt-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-400">
            Interview guides
          </span>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Everything you need to know, by role and by company
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Pick a role or a company to see what the interview actually looks like, or skip
            ahead and build a plan for your exact combination.
          </p>
          <Link
            href="/#plan"
            className="mt-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Build my plan
          </Link>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Guides by role
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {roles.map((role) => {
                const Icon = roleIcons[role.icon];
                return (
                  <Link
                    key={role.id}
                    href={`/guides/roles/${role.id}`}
                    className="flex flex-col gap-3 rounded-2xl border border-black/10 p-5 transition-colors hover:border-zinc-300 dark:border-white/10 dark:hover:border-zinc-700"
                  >
                    <Icon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {role.title}
                    </h3>
                    <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {role.blurb}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 px-6 py-16 dark:bg-zinc-950">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Guides by company
            </h2>
            <div className="flex flex-col gap-8">
              {Object.entries(companiesByCategory).map(([category, group]) => (
                <div key={category} className="flex flex-col gap-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {group.map((company) => (
                      <Link
                        key={company.id}
                        href={`/guides/companies/${company.id}`}
                        className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700"
                      >
                        {company.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
