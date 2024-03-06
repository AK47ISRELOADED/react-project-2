import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='w-full  p-3  text-white flex justify-center   border-b font-bold'>
      <h1 className='text-lg'>Spotify</h1>
      <h4 className='absolute right-5 px-4 py-1 rounded-lg border-2 text-orange-600 border-orange-600  font-xs '>cart {data.filter(item =>  item.added  ).length}</h4>
    </div>
  )
}
 
export default Navbar
