import { useStaticQuery, graphql } from 'gatsby';

export const useSliderImages = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "slider" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return data;
};
