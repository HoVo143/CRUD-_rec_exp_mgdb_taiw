import React from 'react'
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Navbar = ({containerStyles}) => {
  return (
    <div className={`${containerStyles}`}>
        <NavLink className={({isActive}) => isActive ? "active_link" : ""} to='/'> 
          <div className='flexCenter gap-x-1'> 
            <MdHomeFilled/> home
          </div> 
        </NavLink>
        <NavLink className={({isActive}) => isActive ? "active_link" : ""} to='/mens'> 
          <div className='flexCenter gap-x-1'> 
            <MdCategory/> men's
          </div> 
        </NavLink>
        <NavLink className={({isActive}) => isActive ? "active_link" : ""} to='/womens'> 
          <div className='flexCenter gap-x-1'> 
            <MdShop2/> women's
          </div> 
        </NavLink>
        <NavLink className={({isActive}) => isActive ? "active_link" : ""} to='/kids'> 
          <div className='flexCenter gap-x-1'> 
            <MdContacts/> kid's
          </div> 
        </NavLink>
    </div>
  )
}

export default Navbar
