import React from 'react'
import Route from './Route'

export default function Nav () {
  const routes = [
    { name: 'About', route: '/' },
    { name: 'Featured Work', route: '/Featured-work' },
    { name: 'Upcoming Work', route: '/Upcoming-work' },
    { name: 'Gallery', route: '/Gallery' },
    { name: 'Contact', route: '/Contact' }
  ]

  return (
    <nav className='d-flex flex-md-row flex-column justify-content-between align-items-center nav_container px-1'>
      <div class='mb-4 mb-md-0'>
        <Route to='/'>
          <h1>Katie Sanderson</h1>
        </Route>
      </div>
      <div className='mr-0 mr-lg-5'>
        <ul class='d-flex flex-row align-center justify-content-around'>
          {routes.map(({ name, route }, i) => (
            <Route key={i} to={route}><span className='ml-lg-5 ml-md-3 ml-1'>{name}</span></Route>
          ))}
        </ul>
      </div>
    </nav>
  )
}
