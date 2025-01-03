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
                            id="category"
                            value={category} 
                            checked={filtersState.category === category}
                            onChange={(e) => setFiltersState({ ...filtersState, category: e.target.value })}
                        />
                        <span className='ml-1'>{category}</span>
                    </label>
                ))
            }
        </div>

        {/* Platform */}
        <div className='flex flex-col space-y-2'>
            <h4 className='font-medium text-lg'>Platform</h4>
            {
                filters.platforms.map((platform) => (
                    <label key={platform} className='capitalize cursor-pointer'>
                        <input 
                            type="radio" 
                            name="platform"
                            id="platform"
                            value={platform} 
                            checked={filtersState.platform === platform}
                            onChange={(e) => setFiltersState({ ...filtersState, platform: e.target.value })}
                        />
                        <span className='ml-1'>{platform}</span>
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
                            id="priceRange"
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