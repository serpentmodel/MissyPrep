import Link from "next/link";
import { ArrowRight, BarChart3, Layers, Star, Target, Users } from "lucide-react";
import PlanBuilder from "@/components/PlanBuilder";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { companies, features, roles, stats, testimonials } from "@/data/homepage";
import { roleIcons } from "@/lib/roleIcons";

const featureIcons = {
  target: Target,
  chart: BarChart3,
  users: Users,
  layers: Layers,
} as const;

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-black">
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        {/* Hero */}
        <section
          id="plan"
          className="flex flex-col items-center gap-8 px-6 pb-20 pt-16 text-center sm:pt-24"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-400">
            Interview prep, built for you
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            The #1 platform for your interview prep
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Tell us your role and the company you&apos;re preparing for. We&apos;ll build a
            personalized plan with the exact questions you can expect.
          </p>

          <PlanBuilder />

          <div className="mt-8 grid w-full max-w-3xl grid-cols-2 gap-6 border-t border-black/5 pt-8 dark:border-white/10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  {stat.value}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="features" className="bg-zinc-50 px-6 py-20 dark:bg-zinc-950">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
            <div className="flex flex-col gap-3 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Everything you need to land the offer
              </h2>
              <p className="mx-auto max-w-xl text-zinc-600 dark:text-zinc-400">
                One platform, tailored to your role and target company, from your first practice
                question to your final round.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = featureIcons[feature.icon as keyof typeof featureIcons];
                return (
                  <div
                    key={feature.title}
                    className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-zinc-900"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Roles */}
        <section id="roles" className="px-6 py-20">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
            <div className="flex flex-col gap-3 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Prep built for your role
              </h2>
              <p className="mx-auto max-w-xl text-zinc-600 dark:text-zinc-400">
                Every plan is tuned to the skills and rounds that actually show up in your
                interview loop.
              </p>
            </div>
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

        {/* Companies */}
        <section id="companies" className="bg-zinc-50 px-6 py-20 dark:bg-zinc-950">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
            <div className="flex flex-col gap-3 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Prep for the companies you actually want
              </h2>
              <p className="mx-auto max-w-xl text-zinc-600 dark:text-zinc-400">
                Company-specific playbooks covering process, difficulty, and real interview
                questions.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {companies.map((company) => (
                <Link
                  key={company.id}
                  href={`/guides/companies/${company.id}`}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700"
                >
                  {company.name}
                </Link>
              ))}
              <span className="rounded-full border border-dashed border-black/20 px-4 py-2 text-sm font-medium text-zinc-500 dark:border-white/20 dark:text-zinc-500">
                +40 more
              </span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 py-20">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
            <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Candidates who got the offer
            </h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col gap-4 rounded-2xl border border-black/10 p-6 dark:border-white/10"
                >
                  <div className="flex gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-auto text-sm">
                    <p className="font-semibold text-zinc-900 dark:text-zinc-50">{t.name}</p>
                    <p className="text-zinc-500 dark:text-zinc-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 pb-24">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 rounded-3xl bg-zinc-900 px-8 py-16 text-center dark:bg-white">
            <h2 className="text-3xl font-bold tracking-tight text-white dark:text-zinc-900 sm:text-4xl">
              Your personalized plan is one click away
            </h2>
            <p className="max-w-lg text-zinc-300 dark:text-zinc-600">
              Pick your role and target company above, and start practicing with the questions
              that matter most.
            </p>
            <a
              href="#plan"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-700"
            >
              Build my plan
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
