import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { companies, getSampleQuestions, roles } from "@/data/homepage";
import { roleIcons } from "@/lib/roleIcons";

type RouteParams = { companyId: string };

const difficultyStyles: Record<string, string> = {
  Moderate: "text-emerald-700 dark:text-emerald-400",
  Hard: "text-amber-700 dark:text-amber-400",
  "Very Hard": "text-red-700 dark:text-red-400",
};

function getCompany(companyId: string) {
  return companies.find((c) => c.id === companyId);
}

export function generateStaticParams() {
  return companies.map((company) => ({ companyId: company.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const company = getCompany((await params).companyId);
  if (!company) return {};
  return {
    title: `${company.name} Interview Guide — Dataford`,
    description: `What to expect in a ${company.name} interview: process, difficulty, and sample questions by role.`,
  };
}

export default async function CompanyGuidePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const company = getCompany((await params).companyId);
  if (!company) notFound();

  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-black">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-16">
        <Link
          href="/guides"
          className="flex w-fit items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <ArrowLeft className="h-4 w-4" />
          All guides
        </Link>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide">
            <span className="rounded-full border border-black/10 px-3 py-1 text-zinc-600 dark:border-white/10 dark:text-zinc-400">
              {company.category}
            </span>
            <span className={difficultyStyles[company.difficulty]}>
              {company.difficulty} difficulty
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {company.name} interview guide
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {company.description}
          </p>
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Roles we cover at {company.name}
          </h2>
          <div className="flex flex-col gap-4">
            {roles.map((role) => {
              const Icon = roleIcons[role.icon];
              const [firstQuestion] = getSampleQuestions(role, company.name);
              return (
                <Link
                  key={role.id}
                  href={`/plan?role=${role.id}&company=${company.id}`}
                  className="flex flex-col gap-2 rounded-2xl border border-black/10 p-5 transition-colors hover:border-zinc-300 dark:border-white/10 dark:hover:border-zinc-700"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {role.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    &ldquo;{firstQuestion}&rdquo;
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <div className="flex flex-col items-center gap-4 rounded-2xl bg-zinc-900 px-8 py-10 text-center dark:bg-white">
          <p className="text-lg font-semibold text-white dark:text-zinc-900">
            Get the full question set for your role at {company.name}
          </p>
          <Link
            href="/#plan"
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-700"
          >
            Build my plan
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
