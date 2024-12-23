import React from 'react'

import card1 from '/images/category/image2.png'
import card2 from '/images/category/image3.png'
import card3 from '/images/category/image4.png'

const cards = [
    {
        id: 1,
        image: card1,
        trend: 'Trending',
        title: 'Category 1',
    },
    {
        id: 1,
        image: card2,
        trend: 'Trending',
        title: 'Category 2',
    },
    {
        id: 1,
        image: card3,
        trend: 'Trending',
        title: 'Category 3',
    }
]
const HeroSection = () => {
  return (
    <section className="section__container hero__container">
        {
            cards.map((card) => (
                <div key={card.id} className="hero__card">
                    <img src={card.image} alt="" />
                    <div className="hero__content">
                        <p>{card.trend}</p>
                        <h4>{card.title}</h4>
                        <a href='#'>View More</a>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default HeroSection