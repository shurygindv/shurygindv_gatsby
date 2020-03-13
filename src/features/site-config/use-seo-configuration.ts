import { useSiteMetadata } from '.';

interface Configuration {
  description?: string;
  lang?: string;
  title?: string;
}

export const useSeoConfiguration = (cfg: Configuration) => {
  const { description, lang, title } = cfg;
  const site = useSiteMetadata();

  const metaDescription = description || site.description;

  const configuration = {
    title,
    site,
    metaDescription,
    lang,
    meta: [
      {
        name: `description`,
        content: metaDescription,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: metaDescription,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: site.author,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: metaDescription,
      },
    ],
  };

  return configuration;
};
