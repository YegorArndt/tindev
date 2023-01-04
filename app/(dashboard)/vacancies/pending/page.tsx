"use client";

import { Filters } from "app/components";
import stubbyVacancies, { Vacancy } from "stubby";

export default function PendingVacancies() {
  const pendingVacancies = stubbyVacancies.filter(
    (vacancy) => vacancy.vacancyStatus.status === "pending"
  );

  return <Filters vacancies={pendingVacancies} />;
}
