import React, { useState, useEffect } from 'react';

import productsData from '../../data/products.json';
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';

const filters = {
    categories: ['All', 'PS4', 'Xbox', 'PC', 'Mobile'],
    types: ['All', 'Action', 'Adventure', 'RPG', 'Shooter', 'Sports', 'Strategy'],
    priceRanges: [
        { label: 'All', min: 0, max: Infinity },
        { label: 'Under $10', min: 0, max: 10 },
        { label: '$10 to $25', min: 10, max: 25 },
        { label: '$25 to $40', min: 25, max: 40 },
        { label: '$40 to $70', min: 40, max: 70 },
    ]
};

const ShopPage = () => {
    const [products, setProducts] = useState(productsData);
    const [filtersState, setFiltersState] = useState({
        category: 'All',
        type: 'All',
        priceRange: 'All'
    });

    // filtering function
    const applyFilters = () => {
        let filteredProducts = productsData;

        // filter by category
        if (filtersState.category && filtersState.category !== 'All') {
            filteredProducts = filteredProducts.filter(product => product.category === filtersState.category);
        }

        // filter by type
        if (filtersState.type && filtersState.type !== 'All') {
            filteredProducts = filteredProducts.filter(product => product.type === filtersState.type);
        }

        // filter by price range
        if (filtersState.priceRange && filtersState.priceRange !== 'All') {
            const priceRange = filters.priceRanges.find(range => range.label === filtersState.priceRange);
            filteredProducts = filteredProducts.filter(product => product.price >= priceRange.min && product.price <= priceRange.max);
        }

        setProducts(filteredProducts);
    };

    useEffect(() => {
        applyFilters();
    }, [filtersState]);

    // clear the filters
    const clearFilters = () => {
        setFiltersState({
            category: 'All',
            type: 'All',
            priceRange: 'All'
        });
    };

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Shop Page</h2>
                <p className='section__subheader'>
                    Browse a diverse range of categories, from Pc games to PS4 exclusives and more games
                </p>
            </section>

            <section className='section__container'>
                <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
                    {/* left side */}
                    <ShopFiltering 
                    filters={filters} 
                    filtersState={filtersState} 
                    setFiltersState={setFiltersState} 
                    clearFilters={clearFilters}
                    />
                    
                    {/* right side */}
                    <div>
                        <h3 className='text-xl font-medium mb-4'>Products Available: {products.length}</h3>
                        <ProductCards products={products} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopPage;