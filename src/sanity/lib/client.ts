import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

if (!projectId || !dataset) {
  throw new Error(
    'Sanity Configuration Error: NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET is missing. Ensure they are defined in your .env.local file.'
  )
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: apiVersion || '2024-01-01',
  useCdn: true,
  perspective: 'published',
})