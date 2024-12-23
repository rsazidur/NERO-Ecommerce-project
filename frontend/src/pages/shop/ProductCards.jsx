import React from 'react'
import { Link } from 'react-router-dom'

const ProductCards = ({products}) => {
    console.log(products)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
    {
        products.map((product, index) => (
            <div key={index} className='product__card'>
                <div>
                    <Link to={`/shop/${product._id}`}>
                    <img src={product.image} alt="product image" className='max-h-96 md:h-64
                    w-full object-cover hover:scale-105 transition-all duration-300' />
                    </Link>
                </div>
            </div>
        ))

    }
    </div>
  )
}

export default ProductCards