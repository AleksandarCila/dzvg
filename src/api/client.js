import * as prismic from '@prismicio/client'

const repositoryName = 'test-cila'
const routes = [
  // Update to match your website's URL structure
  { type: 'obavestenje', path: '/:uid' },
]

export const client = prismic.createClient(repositoryName, { routes })
