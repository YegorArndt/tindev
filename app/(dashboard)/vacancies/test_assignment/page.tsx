"use client";

import { Filters } from "app/components";
import stubbyVacancies, { Vacancy } from "stubby";

export default function TestAssignmentVacancies() {
  const test_assignment = (stubbyVacancies as Vacancy[]).filter((vacancy) =>
    Boolean(vacancy.vacancyStatus.interview)
  );

  return <Filters vacancies={test_assignment} />;
}
