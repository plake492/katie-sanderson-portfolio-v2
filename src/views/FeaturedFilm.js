import React, { useState, useEffect } from 'react'
import { featuredWork } from '../DB'
import ReactPlayer from 'react-player'
import { FaImdb } from 'react-icons/fa'
import { Link, useLocation, useHistory } from 'react-router-dom'

export default function FeaturedFilm () {
  const [film, setFilm] = useState(null)
  const [index, setIndex] = useState(null)
  const [nextFilm, setNextFilm] = useState('')
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    loadFilm()
  }, [index])

  const loadFilm = () => {
    const ref = location.pathname.split('work/')[1]
    const film = featuredWork.find(item => item.ref === ref)
    if (!film) {
      history.push('/Featured-work')
    }
    setFilm(film)
    const index = featuredWork.map(({ ref }) => ref).indexOf(film.ref)
    setIndex(index)
    setNextFilm(featuredWork[index + 1] || featuredWork[0])
  }

  const nextFeature = () => {
    if (featuredWork[index + 1]) { setFilm(featuredWork[index + 1]) } else { setFilm(featuredWork[0]) }
  }

  if (!film) {
    return <h1 className='text-center ht-5'>Loading</h1>
  }

  return (
    <div className='mt-5 pt-5'>
      <div className='mb-lg-5'>
        <div className='row no-gutters'>
          <div className='col-lg-2 col-sm-6 mb-4 mb-sm-0 poster'>
            <img width='100%' height='100%' src={`https://katie-sanderson-portfolio.s3.amazonaws.com/posters/${film.img}`} />
            <a
              href={film.IMDb}
              target='blank'
            />
          </div>
          <div className='col-sm-6 text-right'>
            <h2 className=''>{film.title} <span className='h5'>{film.role}</span></h2>
            <p className='h5 pl-2'>{film.description}</p>
            <p className='h6 pl-3'>{film.festivals}</p>
            <div className='row'>
              <div className='col-sm-4' />
              <div className='col-sm-8'>
                {film.trailer
                  ? film.trailer.includes('vimeo')
                    ? (
                      <div className='player-wrapper '>
                        <ReactPlayer
                          className='ml-auto react-player'
                          url={film.trailer}
                          width='100%'
                          height='100%'
                          controls
                        />
                      </div>
                    ) : (
                      <iframe
                        className='ml-auto' width='560' height='315' src={film.trailer} frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen
                      />
                    )
                  : null}
                <div>
                  {film.website ? (<a className='mt-auto border px-5 py-1' href={film.website} target='blank'> FILM SITE</a>) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ml-0 ml-sm-5'>
        <Link to='/Featured-work'>back</Link>
        <div onClick={() => nextFeature()}>NEXT \\ {nextFilm.title}</div>
      </div>
    </div>
  )
}
