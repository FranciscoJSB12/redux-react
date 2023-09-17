import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemonsData } from '../../api'
import { setPokemons } from '../../actions'
import { Layout } from '../Layout'
import { Searcher } from '../Searcher'
import { PokemonList } from '../PokemonList'
import { PokemonCard } from '../PokemonCard'
import './styles.css'

export const App = () => {
    const pokemons = useSelector(state => state.pokemons)
    const dispatch = useDispatch()
    
    useEffect(() => {
        (async () => {
            const { results } = await getPokemonsData()
            dispatch(setPokemons(results))
        })()
    }, [])
    
    return (
        <Layout>
           <Searcher/>
           <PokemonList>
               {pokemons?.map((item, index) => (<div 
               className='border border-black break-words'
               key={index}>
                    <PokemonCard pokemon={item}/>
               </div>))}
           </PokemonList>
        </Layout>
    )
}

