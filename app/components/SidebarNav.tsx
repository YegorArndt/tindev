"use client";
import { usePathname } from "next/navigation";
import cn from "classnames";

import { Link } from "app/components/ui";

type SidebarProps = {
  links: {
    text: string;
    to: string;
  }[];
  className?: string;
};

export default function Sidebar({ links, className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={cn("relative pt-10", className)}>
      <ul className="sticky top-20">
        {links.map((link) => (
          <li key={link.text} className="flex">
            <Link
              baseCn="py-2 px-3 w-5/6"
              className={
                pathname?.includes(link.to)
                  ? "clr-base font-medium"
                  : "btn-secondary"
              }
              {...link}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
}
