import React from 'react'

const PokemonCard = ({curPokemon}) => {
    return (
        <li className='pokemon-card'>
            <figure>
                <img
                    src={curPokemon.sprites.other.dream_world.front_default}
                    alt={curPokemon.name}
                    className='pokemon-image'
                />
            </figure>
            <h1 className='pokemon-name'>{curPokemon.name}</h1>
            <div className='pokemon-info pokemon-highlight'>
                <p>
                    {curPokemon.types.map((curType)=> curType.type.name).join(", ")}
                </p>
            </div>
            <div className='grid-three-cols'>
                <p>
                    <span>Height: </span>
                    {curPokemon.height}
                </p>
                <p>
                    <span>Weight: </span>
                    {curPokemon.weight}
                </p>
                <p>
                    <span>Speed: </span>
                    {curPokemon.stats[5].base_stat}
                </p>
                <p>
                    <span>Experience:</span> 
                    {curPokemon.base_experience}
                </p>
                <p>
                    <span>Attack: </span>
                    {curPokemon.stats[5].base_stat}
                </p>
                <p>
                    <span>Abilities: </span>
                    {curPokemon.abilities[0].ability.name}
                </p>
            </div> 
        </li>
    )
}

export default PokemonCard
