import React from 'react'

function Searchbar({search, setSearch, fetchFood}) {
  return (
    <div className=' main flex justify-center  py-10'>
        <input type="text" placeholder='Search your food' value={search} 
        onChange={(e) => setSearch(e.target.value)}
        className='  bg-gray-100 border-2 border-gray-400 rounded-l-lg py-1.5 px-2 w-80 outline-none' />
        <button onClick={fetchFood} className=' border-t-2 border-r-2 border-b-2 border-gray-400 rounded-lg bg-green-200 px-5 py-1.5' >
            Search
        </button>
        </div>
  )
}

export default Searchbar;