import React, { useState } from 'react'

const Card = ({data,handleAdd,index}) => {
    const {name, image, artist,added} = data;
    // console.log(data);
  return (
    <div className='h-28 w-48 px-2 border rounded-2xl flex justify-center gap-3 items-center relative'>
      <img className='h-3/4 w-2/5' src={image} alt="" />
        <div>
            <h1 className='text-2xl  text-gray-200'>{name}</h1>
            <h4 className='text-gray-400'>{artist}</h4>
        </div>
        <button onClick={()=>handleAdd(index)} className={`absolute text-white text-sm ${added ? "bg-teal-500" : "bg-orange-600"} top-3/4 left-[90%] rounded-full p-2`}>{ added ? "cut" : "add" }</button>
    </div>
  )
}

export default Card
