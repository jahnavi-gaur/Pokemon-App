import { useEffect, useState } from 'react';
import './index.css';
import PokemonCard from './components/PokemonCard';

export const Pokemon = ()=>{
    const [pokemon,setPokemon] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [search, setSearch] = useState("")

    useEffect(()=>{
        fetchPokemon()
    },[])

    async function fetchPokemon(){
        try{
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=24");
            const data = await res.json()
            const resultArr = data.results 

            let detailedPokemonData = resultArr.map(async (curPokemon)=>{
                const res = await fetch(curPokemon.url)
                const data = await res.json()
                return data
            })
            // console.log(detailedPokemonData)

            const detailedResponses = await Promise.all(detailedPokemonData);
            // console.log(detailedResponses)
            setPokemon(detailedResponses)
            setLoading(false)
        }
        catch(err){
            console.error("error is fetching api", err)
            setLoading(false)
            setError(err)
        }
    }

    //search functionality
    const searchData = pokemon.filter((curPokemon)=>{
        return curPokemon.name.toLowerCase().includes(search)
    })

    if(loading){
        return (
            <div>
                <h1>
                    Loading...
                </h1>
            </div>
        )
    }

    if(error){
        return(
            <div>
                <h1>{error.message}</h1>
            </div>
        )
    }

    return (
        <section>
            <header>
                <h1>Lets Catch pokemon</h1>
            </header>
            <div className='pokemon-search'>
                <input type='text' placeholder='Search Pokemon' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <div>
                <ul className='cards'>
                    {
                        searchData.map((curPokemon)=>{
                            return(
                                <PokemonCard curPokemon={curPokemon} key={curPokemon.id}/>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}