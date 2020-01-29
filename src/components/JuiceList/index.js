/* eslint-disable camelcase */
import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import Img from 'gatsby-image'

const mapJuicesToItems = juices =>
  juices.nodes.map(document => {
    return {
      image: (
        <Image>
          <Img
            sizes={document.image.childImageSharp.sizes}
            alt={document.Titre}
          />
        </Image>
      ),
      header: document.Titre,
      meta: (
        <Card.Meta style={{color: 'dimgray'}}>{document.bienfaits}</Card.Meta>
      ),
      description: (
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
      ),
    }
  })

export default ({juices}) => (
  <Card.Group items={mapJuicesToItems(juices)} itemsPerRow={2} stackable />
)
