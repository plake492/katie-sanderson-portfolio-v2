import React, { useState } from 'react'
import { upcomingWork } from '../DB'

export default function UpcomingWork () {
  const [visble, setVisable] = useState('')

  return (
    <div className='mt-5 mb-lg-5 pt-5 '>
      <div className='row no-gutters'>
        {upcomingWork.map((film, i) => (
          <div key={i} className='col-lg-2 col-sm-4 poster p-1 p-md-0'>
            <img width='100%' height='100%' src={`https://katie-sanderson-portfolio.s3.amazonaws.com/posters/${film.img}`} />
            <a onClick={() => setVisable(film.title)} />
          </div>
        ))}
        {upcomingWork.map((film, i) => (
          <div key={i} className='col-lg-2 col-sm-4 poster p-1 p-md-0' style={{ display: visble === film.title ? 'block' : 'none' }}>
            <p className='h4'>{film.title}</p>
            <p>{film.role}</p>
            <p>{film.description}</p>
            <div>
              <a href={film.iMDB}> IMDB</a>
            </div>
            <div>
              {film.trailers && (<a href={film.trailers}>Trailer</a>)}
              {film.website && (<a href={film.website}>website</a>)}
            </div>
          </div>
        ))}
      </div>
      <div className='d-none d-lg-block'>
        <div className='row no-gutters alt_posters'>
          {upcomingWork.map((film, i) => (
            <div key={i} className='col-lg-2 col-sm-4 poster p-1 p-md-0'>
              <img width='100%' height='100%' src={`https://katie-sanderson-portfolio.s3.amazonaws.com/posters/${film.img}`} />
              <a onClick={() => setVisable(film.title)} />
            </div>
          ))}
          {upcomingWork.map((film, i) => (
            <div key={i} className='col-lg-2 col-sm-4 poster p-1 p-md-0' style={{ display: visble === film.title ? 'block' : 'none' }}>
              <p>{film.title}</p>
              <p>{film.role}</p>
              <p>{film.description}</p>
              <div>
                <a href={film.iMDB}> IMDB</a>
              </div>
              <div>
                {film.trailers && (<a href={film.trailers}>Trailer</a>)}
                {film.website && (<a href={film.website}>website</a>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
