import React from 'react'
import dealsImg from '/images/category/image1.png'


const DealsSections = () => {
  return (
    <section className='section__container deals__container'>
        <div className='deals__image'>
            <img src={dealsImg} alt=""/>
        </div>
        <div className='deals__content'>
            <h5>Get Up To 20% Discount</h5>
            <h4>On All Products</h4>
            <p>Get up to 20% discount on all products from our store. Don't miss this great opportunity.</p>
            <div className='deals__countdown flex-wrap'>
                <div className='deals__countdown__card'>
                    <h4>14</h4>
                    <p>Days</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>20</h4>
                    <p>Hours</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>15</h4>
                    <p>Mins</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>20</h4>
                    <p>Secs</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default DealsSections