import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { companies, roles } from "@/data/homepage";
import { roleIcons } from "@/lib/roleIcons";

type RouteParams = { roleId: string };

function getRole(roleId: string) {
  return roles.find((r) => r.id === roleId);
}

export function generateStaticParams() {
  return roles.map((role) => ({ roleId: role.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const role = getRole((await params).roleId);
  if (!role) return {};
  return {
    title: `${role.title} Interview Guide — Dataford`,
    description: `What to expect in a ${role.title} interview: focus areas, sample questions, and companies hiring for the role.`,
  };
}

export default async function RoleGuidePage({ params }: { params: Promise<RouteParams> }) {
  const role = getRole((await params).roleId);
  if (!role) notFound();

  const Icon = roleIcons[role.icon];
  const genericQuestions = role.sampleQuestions.map((q) =>
    q.replaceAll("{company}", "your target company")
  );

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
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
            <Icon className="h-5 w-5" />
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {role.title} interview guide
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">{role.blurb}</p>
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            What you&apos;ll be tested on
          </h2>
          <ul className="flex flex-col gap-3">
            {role.focusAreas.map((area) => (
              <li
                key={area}
                className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400"
              >
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                {area}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-black/10 bg-zinc-50 p-6 dark:border-white/10 dark:bg-zinc-900/60">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Sample questions
          </h2>
          <ol className="flex flex-col gap-3">
            {genericQuestions.map((question, i) => (
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
          <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
            Pick a company below to see these questions tailored to their actual interview
            process.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Companies hiring {role.title}s
          </h2>
          <div className="flex flex-wrap gap-3">
            {companies.map((company) => (
              <Link
                key={company.id}
                href={`/plan?role=${role.id}&company=${company.id}`}
                className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 dark:border-white/10 dark:text-zinc-300 dark:hover:border-zinc-700"
              >
                {company.name}
              </Link>
            ))}
          </div>
        </section>

        <div className="flex flex-col items-center gap-4 rounded-2xl bg-zinc-900 px-8 py-10 text-center dark:bg-white">
          <p className="text-lg font-semibold text-white dark:text-zinc-900">
            Ready for the exact questions for your target company?
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
