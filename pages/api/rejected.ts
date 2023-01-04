// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import type { Vacancy } from "stubby";
import stubbyData from "stubby";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Vacancy[]>
) {
  const rejectedVacancies = (stubbyData as Vacancy[]).filter(
    ({ vacancyStatus }) => vacancyStatus.status === "rejected"
  );
  res.status(200).json(rejectedVacancies);
}
