import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import product from '../../data/products.json'

const CategoryPage = () => {
    const {categoryName} = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
    const filtered = product.filter((product) => product.category.toLowerCase() === categoryName.toLowerCase());
        setFilteredProducts(filtered);
        }, [categoryName]);
  return (
    <>
    <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>{categoryName}</h2>
        <p className='section__subheader'> Browse a diverse range of categories, from Pc games to PS4 exclusives and more games
        </p>
    </section>
    </>
  )
}

export default CategoryPage