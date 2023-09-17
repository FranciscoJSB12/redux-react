export const getPokomensDetails = async () => {
    try {
        let pokemonsList = []
        
        const { results: pokemons } = await getPokemonsData()
        
        for await (const pokemon of pokemons) {
            
            const res = await fetch(pokemon.url)
            
            if (!res.ok) { throw new Error(res.status) }
            
            const data = await res.json()

            pokemonsList.push({
                name: data.species.name,
                image: data.sprites.other.dream_world.front_default
            })
        }

        return pokemonsList

    } catch (error) {
        console.warn('ERROR ' + error)
    }
}

export const getPokemonsData = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
        
        if (!res.ok) { throw new Error(res.status) }

        const data = await res.json()
        
        return data

    } catch (error) {
        console.warn('ERROR ' + error)   
    }
}
