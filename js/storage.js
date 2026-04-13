function loadPokemon() {
        const pkmnData = JSON.parse(localStorage.getItem('Pokemon')) ?? [];
        return pkmnData
    }

function savePokemon(pokemon) {
    const pkmnList = loadPokemon();
    pkmnList.push(pokemon)
    const pkmnData = JSON.stringify(pkmnList)
    localStorage.setItem('Pokemon', pkmnData);
}

function saveWildPokemon(pokemon) {
    const wPkmData = JSON.stringify(pokemon)
    sessionStorage.setItem('Wild Pokemon', wPkmData);
}

function loadWildPokemon() {
        const wPkmnData = JSON.parse(sessionStorage.getItem('Wild Pokemon'));
        return wPkmnData
    }