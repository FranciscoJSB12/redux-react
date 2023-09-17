export const getPokemonsData = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=32&offset=0')
        
        if (!res.ok) { throw new Error(res.status) }

        const data = res.json()
        
        return data

    } catch (error) {
        console.warn('HTTP ERROR ' + error)   
    }
}