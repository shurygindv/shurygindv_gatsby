import React from 'react'
import Helmet from 'react-helmet'

import { useSeoConfiguration } from '~features/site-config'

interface Props {
  description?: string
  lang?: string
  title?: string
}

const defaultProps = {
  lang: `en`,
  description: ``,
}

export const SEO: React.FC<Props> = (props = defaultProps) => {
  const { lang, title, meta, site } = useSeoConfiguration(props)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={meta}
    />
  )
}
