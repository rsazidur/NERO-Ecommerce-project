import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className="section__container footer__container">
        <div className="footer__col">
            <h4> CONTACT INFO</h4>
            <p>
                <span><i className='ri-map-pin-2-fill'></i></span>
                1234 Street Name, City Name, United States
            </p>
            <p>
                <span><i className='ri-mail-fill'></i></span>
                support@NEROGaming
            </p>
            <p>
                <span><i className='ri-phone-fill'></i></span>
                +880 1234 567 890
            </p>

        </div>
        <div className="footer__col">
            <h4> COMPANY</h4>
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Services</a>
            <a href="/">Our Blogs</a>
            <a href="/">Terms of Service</a>
        </div>
        <div className="footer__col">
            <h4> USEFUL LINKS</h4>
            <a href="/">Help</a>
            <a href="/">Track your order</a>
            <a href="/">New games</a>
            <a href="/">Discount games</a>
            <a href="/">Popular games</a>
        </div>
        <div className='footer__col'>
            <h4> FOLLOW US</h4>
            <a href="/"><i className='ri-facebook-fill'></i> Facebook</a>
            <a href="/"><i className='ri-twitter-fill'></i> Twitter</a>
            <a href="/"><i className='ri-linkedin-fill'></i> Linkedin</a>
            <a href="/"><i className='ri-instagram-fill'></i> Instagram</a>
        </div>
    </footer>

    <div className="footer__bar">
        <p>© 2025 NEROGaming. All Rights Reserved</p>
    </div>
    </>
  )
}

export default Footer