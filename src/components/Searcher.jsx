import React from 'react'

export const Searcher = () => {
  return (
    <>
      <h1 className='text-6xl font-medium text-center italic text-yellow-400'>Pokedux</h1>
      <input 
        type='text' 
        placeholder='Search a pokemon'
        className='border border-black w-[400px] px-6 py-2 my-8 rounded-full'
      />
    </>
  )
}


