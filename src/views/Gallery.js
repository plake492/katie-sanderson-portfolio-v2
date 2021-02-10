import React, { useState, useEffect } from 'react'
import { photos } from '../DB'
import LazyLoad from 'react-lazyload'

export default function Gallery () {
  const [display, setDisplay] = useState('photography')
  const [photos1, setPhotos1] = useState([])
  const [photos2, setPhotos2] = useState([])

  useEffect(() => {
    const arr1 = photos[display].filter((url, i) => i % 2 === 0)
    const arr2 = photos[display].filter((url, i) => i % 2 !== 0)
    setPhotos1(arr1)
    setPhotos2(arr2)
  }, [display])

  const galleryTabs = [
    {
      ref: 'photography',
      title: 'Photography'
    },
    {
      ref: 'behind_the_scenes',
      title: 'Behind the scenes'
    }
  ]

  return (
    <div className='mt-5'>
      <div className='d-flex mb-4 justify-content-center pt-3'>
        {galleryTabs.map(({ ref, title }, i) => (
          <div key={i} className={i === 0 && 'mr-4'} onClick={() => setDisplay(ref)}>
            <a className={`h5 font-weight-bold ${display === ref ? 'gallery_active' : null}`}>{title}</a>
          </div>
        ))}
      </div>
      <div className='row no-gutters'>
        <div className='col-lg-6'>
          <ul className=''>
            {photos1.map((url, i) => (
              <li key={i} className='p-1 float-left'>
                <LazyLoad>
                  <img src={`https://katie-sanderson-portfolio.s3.amazonaws.com/${display}/${url}`} />
                </LazyLoad>
              </li>
            ))}
          </ul>
        </div>
        <div className='col-lg-6'>
          <ul className=''>
            {photos2.map((url, i) => (
              <li key={i} className='p-1 float-left'>
                <LazyLoad>
                  <img src={`https://katie-sanderson-portfolio.s3.amazonaws.com/${display}/${url}`} />
                </LazyLoad>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
