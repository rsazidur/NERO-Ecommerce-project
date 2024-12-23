import React from 'react'
import ProductCards from './ProductCards'
import  { useState } from 'react'
import products from '../../data/products.json'

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const loadMoreProducts = () => {
      setVisibleProducts(prevCount => prevCount + 4)
  }
  return (
    <section className='section__container product__container'>
        <h2 className='section__header'>Trending Products</h2>
        <p className='section__subheader'> Discover the Hottest Picks: Find your
          favourite game at Best price</p>
    
        {/* Product Cards */}
        <ProductCards products={products}/>
    </section>
  )
}

export default TrendingProducts