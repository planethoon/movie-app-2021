import React from 'react'
import PropTypes from 'prop-types'




export default function Movies({id, year, title, summary, poster}){



  return (
    <div>
      <h5>{title}</h5>
    </div>
  )
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}