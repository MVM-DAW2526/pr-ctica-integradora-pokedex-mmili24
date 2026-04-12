let wildPokemon = null;

document.addEventListener('DOMContentLoaded', () => {
  
  document.getElementById('huntZone').addEventListener('click', async () => {
      try {
          const rndmPkmn = Math.floor(Math.random() * 151) + 1;
          const data = await fetchPokemon(rndmPkmn);
          wildPokemon = data;
          const img = document.getElementById('wildPokemonImg');
          img.src = data.sprites.front_default;
          img.classList.add('silhouette');
          document.getElementById('pokemonPopup').classList.remove('hidden');
      } catch (error) {
          console.error(`❌ Error: ${error.message}`);
      }
  });

  document.getElementById('fightBtn').addEventListener('click', () => {
      saveWildPokemon(wildPokemon);
      window.location.href = 'battle.html';
  });
});