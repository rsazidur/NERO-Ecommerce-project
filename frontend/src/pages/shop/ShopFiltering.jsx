import React from 'react';

const ShopFiltering = ({ filters, filtersState, setFiltersState, clearFilters }) => {
  return (
    <div className='space-y-5 flex-shrink-0'>
        <h3>Filters</h3>

        {/* Category */}
        <div className='flex flex-col space-y-2'>
            <h4 className='font-medium text-lg'>Category</h4>
            {
                filters.categories.map(category => (
                    <label key={category} className='capitalize cursor-pointer'>
                        <input 
                            type="radio" 
                            name="category"
                            id={`category-${category}`} // Added id attribute
                            value={category} 
                            checked={filtersState.category === category}
                            onChange={(e) => setFiltersState({ ...filtersState, category: e.target.value })}
                        />
                        <span className='ml-1'>{category}</span>
                    </label>
                ))
            }
        </div>

        {/* Type */}
        <div className='flex flex-col space-y-2'>
            <h4 className='font-medium text-lg'>Type</h4>
            {
                filters.types.map((type) => (
                    <label key={type} className='capitalize cursor-pointer'>
                        <input 
                            type="radio" 
                            name="type"
                            id={`type-${type}`} // Added id attribute
                            value={type} 
                            checked={filtersState.type === type}
                            onChange={(e) => setFiltersState({ ...filtersState, type: e.target.value })}
                        />
                        <span className='ml-1'>{type}</span>
                    </label>
                ))
            }
        </div>

        {/* Price Range */}
        <div className='flex flex-col space-y-2'>
            <h4 className='font-medium text-lg'>Price Range</h4>
            {
                filters.priceRanges.map(range => (
                    <label key={range.label} className='capitalize cursor-pointer'>
                        <input 
                            type="radio" 
                            name="priceRange"
                            id={`priceRange-${range.label}`} // Added id attribute
                            value={range.label} 
                            checked={filtersState.priceRange === range.label}
                            onChange={(e) => setFiltersState({ ...filtersState, priceRange: e.target.value })}
                        />
                        <span className='ml-1'>{range.label}</span>
                    </label>
                ))
            }
        </div>

        {/* Clear Filters Button */}
        <button onClick={clearFilters} className='mt-4 bg-red-500 text-white py-2 px-4 rounded'>
            Clear Filters
        </button>
    </div>
  );
};

export default ShopFiltering;