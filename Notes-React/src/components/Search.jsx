import React from 'react'
import { MdSearch } from 'react-icons/md';
 const Search = ({handleSearch}) => {
  return (
    <div className=' flex gap-[10px] items-center bg-gray-300 rounded-lg p-[5px] mb-[1.5em] '>
        <MdSearch className=''   size='1.3em'  />
        <input onChange={(event)=>handleSearch(event.target.value)} className='bg-gray-300 outline-none border-none' type="text" placeholder='type to search...'></input>
    </div>
  )
}

export default Search;