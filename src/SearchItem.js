import React from 'react'

const SearchItem = ({search , setSearch}) => {
  return (
    <form action="" className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
        id='search'
        type='text'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        role='searchbox'
        placeholder="Search Items"
        />
        
    </form>
  )
}

export default SearchItem