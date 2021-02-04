
import React from 'react'
import { Link } from 'react-router-dom'

export default function Route ({ to, children }) {
  return (
    <li className='mx-3 mx-lg-0'>
      <Link to={to}>
        {children}
      </Link>
    </li>
  )
}
