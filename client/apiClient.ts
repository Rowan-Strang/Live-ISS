import request from 'superagent'

import { Iss } from '../models/iss.ts'

export async function getIss(name: string): Promise<Iss> {
  const response = await request
    .get('https://api.wheretheiss.at/v1/satellites/25544')
    .query({ name })

  return response.body
}
