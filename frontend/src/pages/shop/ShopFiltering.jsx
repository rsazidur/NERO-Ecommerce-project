import React from 'react'

const ShopFiltering = ({filters, filtersState, setFiltersState, clearFilters}) => {
  return (
    <div className='space-y-5 flex-shrink-0'>
        <h3>Filters</h3>

        <div>
            <h4 className='font-medium text-lg'>Category</h4>

            <h4 />
            {
                filters.categories.map(category => (
                    <label key={category} className='capitalize cursor-pointer'>
                        <input type="radio" 
                        name="category"
                        id = "category"
                        value={category} 
                        checked={filtersState.category === category}
                        onChange={(e) => setFiltersState({...filtersState, category: e.target.value})} />
                        <span className='ml-1'>{category}</span>
                    </label>
                ))
            }
        </div>
    </div>

  )
}

export default ShopFiltering