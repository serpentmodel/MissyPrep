"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { companies, roles } from "@/data/homepage";

function buildQuestions(companyName: string, sampleQuestions: string[]) {
  return sampleQuestions.map((q) => q.replaceAll("{company}", companyName));
}

export default function PlanBuilder() {
  const [roleId, setRoleId] = useState(roles[0].id);
  const [companyId, setCompanyId] = useState(companies[0].id);
  const [plan, setPlan] = useState<{
    roleTitle: string;
    companyName: string;
    questions: string[];
  } | null>(null);

  const selectedRole = useMemo(
    () => roles.find((r) => r.id === roleId) ?? roles[0],
    [roleId]
  );
  const selectedCompany = useMemo(
    () => companies.find((c) => c.id === companyId) ?? companies[0],
    [companyId]
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPlan({
      roleTitle: selectedRole.title,
      companyName: selectedCompany.name,
      questions: buildQuestions(selectedCompany.name, selectedRole.sampleQuestions),
    });
  }

  return (
    <div className="w-full max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 rounded-2xl border border-black/10 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-zinc-900 sm:flex-row sm:items-center sm:gap-2 sm:p-2"
      >
        <label className="flex-1">
          <span className="sr-only">Your role</span>
          <select
            value={roleId}
            onChange={(e) => setRoleId(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-900 focus:border-zinc-400 focus:outline-none dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-100"
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.title}
              </option>
            ))}
          </select>
        </label>
        <label className="flex-1">
          <span className="sr-only">Target company</span>
          <select
            value={companyId}
            onChange={(e) => setCompanyId(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-900 focus:border-zinc-400 focus:outline-none dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-100"
          >
            {companies.map((company) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Build my plan
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      {plan && (
        <div className="mt-4 rounded-2xl border border-black/10 bg-zinc-50 p-5 text-left dark:border-white/10 dark:bg-zinc-900/60">
          <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <Sparkles className="h-4 w-4 text-amber-500" />
            Exact questions you can expect
          </div>
          <p className="mb-3 text-xs text-zinc-500 dark:text-zinc-500">
            {plan.roleTitle} @ {plan.companyName}
          </p>
          <ol className="flex flex-col gap-2">
            {plan.questions.map((question, i) => (
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
        </div>
      )}
    </div>
  );
}
