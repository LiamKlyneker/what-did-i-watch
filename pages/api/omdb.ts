import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name?: string;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const params = parseParams(req.query);
    const data = await fetch(`${process.env.OMDB_BASE_URL}?${params}`);
    const json = await data.json();
    res.status(200).json(json);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

const parseParams = (query: any): string => {
  const params = new URLSearchParams();
  params.append("apiKey", process.env.OMDB_API_KEY as string);
  Object.keys(query).forEach((key: string) => {
    params.append(key, query[key]);
  });
  return params.toString();
};
