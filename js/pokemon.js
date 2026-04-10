class Pokemon {
  #stats;
  #id;
  constructor(id, name, types, height, weight, stats, abilities, sprites) {
    this.#id = id;
    this.nom = name;
    this.tipus = types;
    this.altura = height;
    this.pes = weight;
    this.#stats = stats;
    this.habilitats = abilities;
    this.sprites = sprites;
  }

  getStats() {
    return this.#stats;
  }

  getId() {
    return this.#id;
  }

  static fromApiData(data) {
    const id = data.id;
    const name = data.name;
    const types = data.types.map(typeInfo => typeInfo.type.name);
    const height = data.height;
    const weight = data.weight;
    const stats = data.stats.map(statInfo => ({
      nom: statInfo.stat.name,
      valor: statInfo.base_stat
    }));
    const abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name);
    const sprites = data.sprites.front_default;

    return new Pokemon(
      id,
      name,
      types,
      height,
      weight,
      stats,
      abilities,
      sprites
    );
  }
}

class WildPokemon extends Pokemon {
  constructor(id, name, types, height, weight, stats, abilities, sprites, location) {
    super(id, name, types, height, weight, stats, abilities, sprites);
    this.capturat = false;
    this.location = location;
  }
}

class CapturedPokemon extends Pokemon {
  constructor(id, name, types, height, weight, stats, abilities, sprites, level=1) {
    super(id, name, types, height, weight, stats, abilities, sprites);
    this.capturat = true;
    this.level = level;
  }
}