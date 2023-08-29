import * as prismic from '@prismicio/client'

const repositoryName = 'dzvg'
const routes = [
  { type: 'obavestenje', path: '/:uid' },
]

export const client = prismic.createClient(repositoryName, { routes })
