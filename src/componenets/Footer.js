import React from 'react'
import { FaImdb, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function footer () {
  return (
    <footer className='my-5 d-flex justify-content-sm-end justify-content-around container'>
      <a
        className='ml-0 ml-sm-5'
        href='https://www.imdb.com/name/nm9165286/?ref_=fn_al_nm_1'
        target='blank'
      >
        <FaImdb style={{ color: '#66' }} size={40} />
      </a>
      <a
        className='ml-0 ml-sm-5'
        href='https://www.linkedin.com/in/katie-sanderson-29021913a/'
        target='blank'
      >
        <FaLinkedin style={{ color: '#66' }} size={40} />
      </a>
      <a className='ml-0 ml-sm-5' href='mailto:katie.c.sanderson@gmail.com' target='blank'>
        <FaEnvelope style={{ color: '#66' }} size={40} />
      </a>
    </footer>

  )
}
