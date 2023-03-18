import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import HeadSEO from '../components/HeadSEO'

export default function Product ({ data }) {
  return (
    <>
      <HeadSEO title='Product Page' description='The products List from Json' />
      <div>
        {data.allProductsJson.nodes.map(product => (
          <div key={product.jsonId}>
            <p>{`${product.brand} ${product.name}`}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating Score: {product.price}</p>
            <div style={{ width: 400 }}>
              <Img fixed={product.image.childImageSharp.fixed} />
              <Img fluid={product.image.childImageSharp.fluid} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export const query = graphql`
  query {
    allProductsJson {
      nodes {
        id
        description
        category
        brand
        jsonId
        name
        price
        rating
        image {
          childImageSharp {
            fixed(height: 200, width: 200) {
              height
              width
              srcSet
              src
            }
            fluid {
              aspectRatio
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query {
//     allProductsJson {
//       nodes {
//         id
//         description
//         category
//         brand
//         jsonId
//         name
//         price
//         rating
//         image {
//           childImageSharp {
//             fluid {
//               aspectRatio
//               sizes
//               src
//               srcSet
//             }
//           }
//         }
//       }
//     }
//   }
// `
