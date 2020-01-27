import React from "react"
import { useStaticQuery, graphql, } from "gatsby"
import {Card, Image} from 'semantic-ui-react'
import Img from 'gatsby-image'
//import JuiceList from '../components/JuiceList'
//import {Link} from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query JusQyuery {
        site {
            siteMetadata {
              title
            }
          }
          allStrapiBoissons {
            nodes {
              id
              Titre
              Description
              bienfaits
              Composition {
                Quantity
                unity
                IngredientName
              }
              image {
                childImageSharp {
                  sizes(maxWidth: 600) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
              Instructions
            }
          }
    }
  `)
  return (
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
      {/* <li>{data.allStrapiBoissons.nodes.Titre}</li> */}
      {/* <JuiceList juices={data.allStrapiBoissons.nodes} /> */}
      {/* <ul>
      {data.allStrapiBoissons.nodes.map(document => (
        <li key={document.id}>
          <h2>
            <Link to={`/${document.id}`}>{document.Titre}</Link>
          </h2>
          <p>{document.Description}<br/>{document.bienfaits}</p>
        </li>
      ))}
    </ul> */}
    <Card.Group itemsPerRow={3} stackable >
    {data.allStrapiBoissons.nodes.map(document => ( 
    <Card>
      {/* <h1>{document.image.childImageSharp.sizes}</h1> */}
      <Image>
          <Img sizes={document.image.childImageSharp.sizes}  />
      </Image>
      <Card.Content>
        <Card.Header>{document.Titre}</Card.Header>
        <Card.Meta>{document.bienfaits}</Card.Meta>
        <Card.Description>
          {document.Description}<br/>
          <ul>
          {document.Composition.map(compo => (
            <li key={compo.IngredientName}>
                <p>{compo.Quantity} {compo.unity} {compo.IngredientName}</p>
            </li>
           ))}
          </ul>
          {/* <Image>
              <Img sizes={document.image.childImageSharp.fluid.sizes} alt={document.Titre} />
          </Image> */}
          {document.Instructions}
        </Card.Description>
      </Card.Content>
    </Card>
    ))}
    </Card.Group>
    </header>
  )
}