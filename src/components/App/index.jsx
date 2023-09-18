import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokomensDetails } from '../../api'
import { setPokemons } from '../../actions'
import { Layout } from '../Layout'
import { Searcher } from '../Searcher'
import { PokemonList } from '../PokemonList'
import { PokemonCard } from '../PokemonCard'
import { Loading } from '../Loading'
import './styles.css'

export const App = () => {
    const pokemons = useSelector(state => state.pokemons)
    const dispatch = useDispatch()
    
    useEffect(() => {
        (async () => {
            const data = await getPokomensDetails()
            dispatch(setPokemons(data))
        })()
    }, [])
    
    return (
        <Layout>
           <Searcher/>
           <PokemonList>
              {pokemons ? pokemons.map((item) => 
              (<PokemonCard key={item.id} pokemon={item}/>)) 
              : <Loading/>}
           </PokemonList>
        </Layout>
    )
}

