import React from 'react'
import { MdOutlineLocalOffer, MdStar } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
      <section className='relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full '>
        <div className='max_padd_container relative top-32 xs:top-52'>
          <h1 className='h1 capitalize max-w-[37rem]'>Digital Shopping Hub Junction</h1>
          <p className='text-gray-50 regular-16 mt-6 max-w-[33rem]'> Stack  Website MongoDB, Express, React, Node.js and Tailwind complete CRUD App with ADMIN panel. After downloading, extract the folder and open it in the VS Code editor. Then, install Node by running "npm i" in each folder's [frontend, backend, admin] integrated terminal. Also copy the assets from the description of this project's tutorial on YouTube. Copy your own MongoDB connection string (watch tutorial) paste it in backend > index.js file Now, proceed with these steps following the tutorial to practice & learn....  </p>
          <div className='flexStart !items-center gap-x-4 my-10'>
            <div className='!regular-24 flexCenter gap-x-3'>
              <MdStar/>
              <MdStar/>
              <MdStar/>
              <MdStar/>
            </div>
            <div className='bold-16 sm:bold-20'> 176k 
              <span className='regular-16 sm:regular-20'>Excellent Reviews</span>
            </div>
          </div>
          <div className='max-xs:flex-col flex gap-2'>
            <NavLink to={''} className={"btn_dark_rounded flexCenter"}>Shop now</NavLink>
            <NavLink to={''} className={"btn_dark_rounded flexCenter gap-x-2"}>
              <MdOutlineLocalOffer className='text-2xl'/>
              Offers
            </NavLink>

          </div>
        </div>
      </section>
  )
}

export default Hero
