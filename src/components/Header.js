import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function Header () {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          siteUrl
          title
        }
      }
    }
  `)
  return (
    <div>
      <p>
        {data.site.siteMetadata.title}@{data.site.siteMetadata.author}
      </p>
      <p>{data.site.siteMetadata.siteUrl}</p>
    </div>
  )
}
