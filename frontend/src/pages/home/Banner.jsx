import React from 'react'
import { Link } from 'react-router-dom'

import bannerImg from '/images/banner2.png'

const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content z-30'>
            <h4 className='uppercase'>UP TO 20% Discount on</h4>
            <h1>PC games</h1>
            <p>Get your favorite games at the best price</p>
            <button className='btn'><Link to="/shop">Shop Now</Link></button>
        </div>
        <div className='header__image'>
            <img src={bannerImg} alt='banner image' />
        </div>
    </div>
  )
}

export default Banner