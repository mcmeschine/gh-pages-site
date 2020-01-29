import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {Card, Image, Header} from 'semantic-ui-react'
import Img from 'gatsby-image'
import SEO from '../components/SEO'
import logo from '../images/ill-short-dark.svg'
import Layout from '../components/Layout'
import JuiceList from '../components/JuiceList'

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
          Consommer
          Composition {
            Quantity
            unity
            IngredientName
          }
          image {
            childImageSharp {
              sizes(maxHeight: 150) {
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
    <>
      <Layout location="location">
        <SEO title={data.site.siteMetadata.title} />
        <Header
          as="h3"
          icon
          textAlign="center"
          style={{
            marginBottom: '2em',
          }}
        >
          <Header.Content
            style={{
              width: '60%',
              margin: '0 auto',
            }}
          >
            <Image src={logo} alt="logo" />
          </Header.Content>
        </Header>
        <JuiceList juices={data.allStrapiBoissons} />
      </Layout>
      <h1>Eaux et Infusions Détox</h1>
      <h2>Boissons bienfaisantes pour se désaltérer sans se lasser</h2>
      <Card.Group itemsPerRow={4} stackable>
        {data.allStrapiBoissons.nodes.map(document => (
          <Card>
            <Image>
              <Img sizes={document.image.childImageSharp.sizes} />
            </Image>
            <Card.Content>
              <Card.Header>{document.Titre}</Card.Header>
              <Card.Meta>{document.bienfaits}</Card.Meta>
              <Card.Description>
                {document.Description}
                <br />
                <ul>
                  {document.Composition.map(compo => (
                    <li key={compo.IngredientName}>
                      <p>
                        {compo.Quantity} {compo.unity} {compo.IngredientName}
                      </p>
                    </li>
                  ))}
                </ul>
                {document.Instructions}
                <br />
                <i>
                  <b>{document.Consommer}</b>
                </i>
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </>
  )
}
