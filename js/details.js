const params = new URLSearchParams(window.location.search);
const pokemonId = params.get('id');

async function loadPokemonDetails() {
    try {
        const pokemonData = await fetchPokemon(pokemonId);
        const speciesData = await fetchSpecies(pokemonId);
        const evolutionData = await fetchEvolutionChain(speciesData.evolution_chain.url);
        renderPokemonDetails(pokemonData, speciesData, evolutionData);
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
    }
}

function renderPokemonDetails(pokemonData, speciesData, evolutionData) {
    
    const nameDiv = document.getElementById('pokemonName');
    const name = document.createElement('h2');
    name.textContent = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
    nameDiv.appendChild(name);

    const imageDiv = document.getElementById('pokemonImage');
    const img = document.createElement('img');
    img.src = pokemonData.sprites.front_default;
    imageDiv.appendChild(img);

    const statsDiv = document.getElementById('pokemonStats');
    pokemonData.stats.forEach(stat => {
        const statElement = document.createElement('p');
        statElement.textContent = `${stat.stat.name}: ${stat.base_stat}`;
        statsDiv.appendChild(statElement);
    });

    const movesDiv = document.getElementById('pokemonMoves');
    pokemonData.moves.slice(0, 10).forEach(move => {
        const moveElement = document.createElement('p');
        moveElement.textContent = move.move.name;
        movesDiv.appendChild(moveElement);
    });

    const evolutionDiv = document.getElementById('pokemonEvolution');
    const evoName = document.createElement('p');
    evoName.textContent = evolutionData.chain.species.name;
    evolutionDiv.appendChild(evoName);
}

document.addEventListener('DOMContentLoaded', loadPokemonDetails);