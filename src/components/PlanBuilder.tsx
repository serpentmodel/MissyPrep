"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { companies, roles } from "@/data/homepage";

export default function PlanBuilder() {
  const router = useRouter();
  const [roleId, setRoleId] = useState(roles[0].id);
  const [companyId, setCompanyId] = useState(companies[0].id);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/plan?role=${roleId}&company=${companyId}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl flex-col gap-3 rounded-2xl border border-black/10 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-zinc-900 sm:flex-row sm:items-center sm:gap-2 sm:p-2"
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
  );
}
