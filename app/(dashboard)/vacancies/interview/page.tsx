"use client";

import { Filters } from "app/components";
import stubbyVacancies, { Vacancy } from "stubby";

export default function InterviewVacancies() {
  const interviewVacancies = (stubbyVacancies as Vacancy[]).filter((vacancy) =>
    Boolean(vacancy.vacancyStatus.interview)
  );

  return <Filters vacancies={interviewVacancies} />;
}
