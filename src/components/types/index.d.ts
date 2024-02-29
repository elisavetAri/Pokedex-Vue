export interface Pokemon {
    name:string
    id: string
    key: string
    pokemon_v2_pokemoncolor: Pokemon_v2_pokemonColor
    is_legendary:string
  }

  export interface Pokemon_v2_pokemonColor {
    name: string
  }