import React from 'react'

export const PokemonList = ({ children }) => {
  return (
    <section className='w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5'>
      {children}
    </section>
  )
}

