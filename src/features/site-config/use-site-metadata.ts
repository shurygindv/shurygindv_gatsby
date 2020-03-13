import { useStaticQuery, graphql } from 'gatsby';

interface SiteMetadata {
  title: string;
  author: string;
  description: string;
  siteUrl: string;
}

export const useSiteMetadata = (): SiteMetadata => {
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
  );

  return site.siteMetadata;
};
