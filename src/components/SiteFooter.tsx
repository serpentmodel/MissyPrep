export default function SiteFooter() {
  return (
    <footer className="border-t border-black/5 px-6 py-8 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-500">
      © {new Date().getFullYear()} Dataford. Built to get you hired.
    </footer>
  );
}
