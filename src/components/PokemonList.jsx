import React from 'react'

export const PokemonList = ({ children }) => {
  return (
    <section className='border border-black'>
        <h1>Pokemon List</h1>
        <ul>
            {children}
        </ul>
    </section>
  )
}

