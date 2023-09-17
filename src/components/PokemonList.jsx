import React from 'react'

export const PokemonList = ({ children }) => {
  return (
    <section className='w-full max-w-screen-xl mx-auto grid grid-cols-4 gap-x-10 gap-y-5'>
      {children}
    </section>
  )
}

