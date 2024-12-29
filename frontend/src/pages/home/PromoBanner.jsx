import React from 'react'

const PromoBanner = () => {
  return (
    <section className='section__container banner__container'>
        <div className='banner__card'>
            <span><i className='ri-truck-line'></i></span>
            <h4>Quick Pharchase</h4>
            <p>Get your product in a quick time.</p>
        </div>
        <div className='banner__card'>
            <span><i className='ri-money-dollar-circle-line'></i></span>
            <h4>100% Money Back Guaranty</h4>
            <p>Get your product in a quick time.</p>
        </div>
        <div className='banner__card'>
            <span><i className='ri-user-voice-fill'></i></span>
            <h4>Strong Support</h4>
            <p>Get your product in a quick time.</p>
        </div>

    </section>
  )
}

export default PromoBanner