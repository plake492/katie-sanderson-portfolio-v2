import React, { useState } from 'react'
import { featuredWork } from '../DB'
import FeaturedFilm from './FeaturedFilm'
import { Route, Link } from 'react-router-dom'

export default function Posters () {
  const [featuredFilm, setFeaturedFilm] = useState(null)

  const selectFilm = (film) => {
    setFeaturedFilm(film)
  }

  return (
    <>
      <Route exact path='/Featured-work'>
        <div className='mt-5 mb-lg-5 pt-5 '>
          <div className='row no-gutters '>
            {featuredWork.map((film, i) => (
              <div key={i} className='col-lg-2 col-sm-4 poster p-1 p-md-0'>
                <img width='100%' height='100%' src={`https://katie-sanderson-portfolio.s3.amazonaws.com/posters/${film.img}`} />
                <Link onClick={() => selectFilm(film)} to={`Featured-work/${film.ref}`} />
              </div>
            ))}
          </div>
        </div>
      </Route>
      <Route path='/Featured-work/:film'>
        <FeaturedFilm film={featuredFilm} />
      </Route>
    </>
  )
}
