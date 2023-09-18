import { capitalize } from 'lodash'
import { pokemonColors } from '../utils/pokemonColors'

export const PokemonCard = ({ pokemon }) => {
  const type = pokemon.types[0].type.name
  const bgColor = pokemonColors[type]

  return (
    <div className={`${bgColor} rounded-lg py-4 flex flex-col items-center gap-6 cursor-pointer`}>
      <h2 className='text-lg italic font-semibold'>{capitalize(pokemon.name)}</h2>
      <img src={pokemon.image} className='w-[100px] h-[200px]'/>
    </div> 
  )
}
