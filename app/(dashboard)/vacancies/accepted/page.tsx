"use client";

import { Filters } from "app/components";
import stubbyVacancies, { Vacancy } from "stubby";

export default function AcceptedVacancies() {
  const acceptedVacancies = (stubbyVacancies as Vacancy[]).filter(
    (vacancy) => vacancy.vacancyStatus.status === "accepted"
  );

  return <Filters vacancies={acceptedVacancies} />;
}
