import { SidebarNav } from "app/components";
import { routes } from "app/constants";

export default function VacanciesLayout({ children }: Layout) {
  return (
    <div className="bg-primary min-h-screen">
      <div className="container grid grid-cols-4">
        <SidebarNav
          links={[
            { text: "Pending", to: routes.pending },
            { text: "Accepted", to: routes.accepted },
            { text: "Rejected", to: routes.rejected },
            { text: "Awaiting interview", to: routes.interview },
            { text: "Issued test assignment", to: routes.test_assignment },
          ]}
        />
        <div className="col-span-3 pt-10">{children}</div>
      </div>
    </div>
  );
}
