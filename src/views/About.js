import React from 'react'
import { experiance } from '../DB'

export default function About () {
  return (
    <div className='mx-1'>
      <h2 className='font-weight-bolder text-center margin_lg'>FILM PRODUCER \\ FIRST ASSISTANT DIRECTOR</h2>
      <div className='row mt-5'>
        <div class='col-lg-7'>
          {/* <h2 className='font-weight-bolder text-center margin_lg'>FILM PRODUCER \\ FIRST ASSISTANT DIRECTOR</h2> */}
          <img width='100%' src='https://katie-sanderson-portfolio.s3.amazonaws.com/profile/DSC02527.jpg' alt='Profile Picture' />
        </div>
        <div className='col-1' />
        <div class='col-lg-4 mt-4 mt-lg-0 border-left pt-5'>
          <article className=' pt-5 pr-1'>
            <p className='text-right'>Katie Sanderson is a passionate filmmaker aspiring to redefine the quality of content being made at the independent level. She enjoys helping creatives bring their projects to life through effective strategy and fundraising. After graduating from the University of North Carolina School of the Arts with a BFA in producing, Katie moved to Los Angeles, California. She has worked for large companies and distributors including HBO Max and Netflix while producing several of her own projects. She is currently working on season 17 of Grey’s Anatomy.</p>
            <a className='d-block text-center h4' href='http://voyagela.com/interview/meet-katie-sanderson-katie-sanderson-los-angeles-ca/' target='blank'> * * *</a>
          </article>
        </div>
      </div>
      <section className='row p-2 mt-4 '>
        {experiance.map((item, i) => (
          <div key={i} className='col-12 p-2 pl-3 my-2 border-top job_card'>
            <header className='mb-3'>{item.title}<span className='ml-4'>{item.jobType}</span></header>
            <p>{item.role}</p>
            <p>{item.description}</p>
            <p>{item.date}</p>
          </div>

        ))}
      </section>

    </div>
  )
}
