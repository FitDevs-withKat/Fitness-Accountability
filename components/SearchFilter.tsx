import React from 'react'

interface SearchFilterProps {
  searchString: string,
  setSearchString: (searchTerm: string) => void
}

const SearchFilter = ({ searchString, setSearchString } : SearchFilterProps) => {
  return (
    <div className='py-4 flex justify-end items-end'>
      <input
        className='rounded-md px-4 py-2 outline-none w-1/3'
        placeholder='Search for user or by location' 
        onChange={e => setSearchString(e.target.value)} 
        value={searchString}
      />
    </div>
  )
}

export default SearchFilter