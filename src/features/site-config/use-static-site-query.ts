import { useStaticQuery, graphql } from 'gatsby'

interface GatsbySiteQuery {
  siteMetadata: {
    title: string
    author: string
    description: string
  }
}

export const useStaticSiteQuery = (): GatsbySiteQuery => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return site
}
