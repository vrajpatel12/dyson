import Image from 'next/image'
import React from 'react'
import Logo from '../public/logo/logo.svg'
import{FaSearch}from 'react-icons/fa'
import Offer from './Offer'

const Header=() =>{
  return (
      <header>
          <div className='upper-nav'>
            <li>Home</li>
            <li>Items for kitchen and bar</li>
            <li>Pots and pans</li>
          </div>
      <hr />
          <div role={"feed"} className='header'>
            <div className='logo'>
                <Image src="/logo/logo.svg" width="150px" height="80px"></Image>
            </div>
            <nav>
                <li>Shop</li>
                <li>For business</li>
                <li>Support</li>
                <li>My Dyson</li>
            </nav>
            <div role={"search"} className="search">
                <input placeholder='search'></input>
                <FaSearch color='white' size="1rem"></FaSearch>
            </div>
          </div>
          <hr />
          <Offer></Offer>
      </header>
  )
}

export default Header