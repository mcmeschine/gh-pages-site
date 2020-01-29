import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import get from 'lodash/get'
import {Image, Header} from 'semantic-ui-react'
import JuiceList from '../components/JuiceList'
import SEO from '../components/SEO'
import logo from '../images/ill-short-dark.svg'
import Layout from '../components/Layout'

const StoreIndexJuice = ({location}) => {
  const data = useStaticQuery(graphql`
    query IndexJuiceQuery {
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

  const siteTitle = get(data, 'site.siteMetadata.title')
  const juices = get(data, 'allStrapiBoissons')
  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
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
      <JuiceList juices={juices} />
    </Layout>
  )
}

export default StoreIndexJuice
