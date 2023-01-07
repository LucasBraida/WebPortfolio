import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import env from 'react-dotenv'
export const client = sanityClient({
    projectId: env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token:  env.REACT_APP_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
