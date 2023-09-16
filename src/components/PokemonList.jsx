import React from 'react'

export const PokemonList = ({ children }) => {
  return (
    <section>
        <h1>Pokemon List</h1>
        <div>
            {children}
        </div>
    </section>
  )
}

