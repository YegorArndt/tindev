"use client";

import { usePathname } from "next/navigation";

import { Link } from "app/components/ui";
import { routes } from "app/constants";

export default function DashboardLayout({ children }: Layout) {
  const pathname = usePathname();
  const navigationTabs = [
    { text: "Vacancies", to: routes.pending },
    { text: "Your data", to: routes.all_user_data },
    { text: "Site settings", to: routes.settings },
  ];

  return (
    <main className="relative">
      <nav className="bg-base py-3 sticky top-0 border-bottom z-10">
        <div className="flex gap-3 container">
          {navigationTabs.map(({ text, to }, i) => (
            <Link
              key={text}
              text={text}
              to={to}
              baseCn="relative py-2 px-3 rounded"
              className={
                pathname?.includes(
                  text.split(" ")[text.split(" ").length - 1].toLowerCase()
                ) // Tabs have nested tabs therefore we need to rely on text content being part of the pathname. Output example: 'settings'
                  ? "active-tab clr-base"
                  : "btn-secondary"
              }
            />
          ))}
        </div>
      </nav>
      {children}
    </main>
  );
}
