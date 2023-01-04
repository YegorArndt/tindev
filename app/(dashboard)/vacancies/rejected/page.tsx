"use client";

import { Filters } from "app/components";
import stubbyVacancies, { Vacancy } from "stubby";

export default function RejectedVacancies() {
  const rejectedVacancies = (stubbyVacancies as Vacancy[]).filter(
    (vacancy) => vacancy.vacancyStatus.status === "rejected"
  );

  return <Filters vacancies={rejectedVacancies} />;
}
