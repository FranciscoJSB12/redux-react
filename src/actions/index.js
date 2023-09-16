import { SET_POKEMONS } from './types'

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
})

//Action creator: es una función que retorna un action
//un objecto que describe el cambio a ocurrir

