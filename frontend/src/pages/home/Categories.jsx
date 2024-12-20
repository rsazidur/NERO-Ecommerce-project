import React from 'react'

import category1 from '/images/category/image2.png'
import category2 from '/images/category/image3.png'
import category3 from '/images/category/image4.png'
import category4 from '/images/category/image5.png'
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories = [
        {name: 'PC Games', path: 'pcgames' , image: category1},
        {name: 'XBOX', path: 'xbox' , image: category2},
        {name: 'PS4', path: 'ps4' , image: category3},
        {name: 'Mobiles', path: 'mobiles' , image: category4},
    ]
  return (
    <>
    <div className='product-grid'>
        {
            categories.map((category) => (
                <Link to={`/category/${category.path}`} className='category__card' >
                    <img src={category.image} alt={category.name} />
                    <h4>{category.name}</h4>
                </Link>
            ))
        }
    </div>
    </>
  )    
}

export default Categories