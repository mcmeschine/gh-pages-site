/* eslint-disable camelcase */
import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'


const mapJuicesToItems = juices =>
  juices.map(document => {
    console.log(document);
    
  })

export default ({juices}) => (
  <Card.Group items={mapJuicesToItems(juices)} itemsPerRow={2} stackable />
)
