import { useEffect } from 'react'
import { connect } from 'react-redux'
import { setPokemons as setPokemonsActions } from '../actions'
import { getPokemonsData } from '../api'
import { Layout } from '../components/Layout'
import { Searcher } from '../components/Searcher'
import { PokemonList } from '../components/PokemonList'
import { PokemonCard } from '../components/PokemonCard'
import './styles.css'

const App = ({ pokemons, setPokemons }) => {
    useEffect(() => {
        (async () => {
            const { results } = await getPokemonsData()
            setPokemons(results)
        })()
    }, [])

    console.log(pokemons)

    return (
        <Layout>
           <Searcher/>
           <PokemonList>
                <PokemonCard/>
           </PokemonList>
        </Layout>
    )
}

const mapStateToProps = (state) => ({pokemons: state.pokemons})
//Función que recibe nuestro estado, retorna un objeto cuyas propiedades son
//enviadas a las props del componente que se está conectando a redux

const mapDispatchToProps = (dispatch) => ({
    setPokemons: (value) => dispatch(setPokemonsActions(value))
})
//Función que recibe el dispatcher de redux, retorn un objeto a las props
//con los actions creators, debe llamar al disparador de redux para ejecutar la acción

export default connect(mapStateToProps, mapDispatchToProps)(App)