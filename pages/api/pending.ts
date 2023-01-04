// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import type { Vacancy } from "stubby";
import stubbyData from "stubby";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Vacancy[]>
) {
  const pendingVacancies = (stubbyData as Vacancy[]).filter(
    ({ vacancyStatus }) => vacancyStatus.status === "pending"
  );
  res.status(200).json(pendingVacancies);
}
