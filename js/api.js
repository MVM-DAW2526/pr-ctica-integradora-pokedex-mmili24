const BASE_URL = 'https://pokeapi.co/api/v2';

async function fetchPokemonList() {
    try {
        const resposta = await fetch(`${BASE_URL}/pokemon/?limit=151`);
        if (!resposta.ok) {
            throw new Error("Pokémon no trobat a la regió!");
        }
        const pokemonList = await resposta.json();
        return pokemonList.results;
    } catch (error) {
        console.error(`❌ Error de la Pokédex: ${error.message}`);
    }
}

async function fetchPokemon(idOrName) {
    try {
        const resposta = await fetch(`${BASE_URL}/pokemon/${idOrName}`);
        if (!resposta.ok) {
            throw new Error("Pokémon no trobat!");
        }
        const pokemon = await resposta.json();
        return pokemon;
    } catch (error) {
        console.error(`❌ Error de la Pokédex: ${error.message}`);
    }
}

async function fetchSpecies(id) {
    try {
        const resposta = await fetch(`${BASE_URL}/pokemon-species/${id}`);
        if (!resposta.ok) {
            throw new Error("Especie no trobada!");
        }
        const especie = await resposta.json();
        return especie;
    } catch (error) {
        console.error(`❌ Error de la Pokédex: ${error.message}`);
    }
}

async function fetchEvolutionChain(url) {
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error("Evolució no trobada!");
        }
        const evolution = await resposta.json();
        return evolution;
    } catch (error) {
        console.error(`❌ Error de la Pokédex: ${error.message}`);
    }
}
