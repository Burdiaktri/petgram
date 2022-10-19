import React from 'react'
import { Link, Image } from './styles'
import propTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => {
  return (
    <Link to={path}>
      <Image src={cover} />
      {emoji}
    </Link>
  )
}

Category.propTypes = {
  cover: propTypes.string.isRequired,
  path: propTypes.string.isRequired,
  emoji: propTypes.string.isRequired
}
