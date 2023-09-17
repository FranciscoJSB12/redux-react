import React from 'react'

export const Searcher = () => {
  return (
    <>
      <h1 className='text-5xl font-medium text-center'>Pokedux</h1>
      <input 
        type='text' 
        placeholder='Search a pokemon'
        className='border border-black w-96 px-6 py-2 my-8 rounded-full'
      />
    </>
  )
}


