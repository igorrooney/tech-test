// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CustomPatient } from '@/types/custom-fhir'
import data from '../../data/patients.json'

type Data = {
  patients: CustomPatient[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const patients = data.entry.map((entry) => entry.resource as CustomPatient)
  res.status(200).json({ patients })
}
