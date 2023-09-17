import React from 'react'

export const PokemonCard = ({ pokemon }) => {
  return (
    <>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} className='w-[100px] h-[100px]'/>
    </>
  )
}
