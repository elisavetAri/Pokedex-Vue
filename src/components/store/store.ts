import { defineStore } from "pinia";
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { reactive } from "vue";

export const Store = defineStore('pokemonStore', () =>{
    const CHARACTERS_QUERY = gql`
    query samplePokeAPIquery {
      gen3_species: pokemon_v2_pokemonspecies(where: {pokemon_v2_generation: {name: {_eq: "generation-iii"}}}, order_by: {id: asc}) {
        name
    
       pokemon_v2_pokemoncolor {
         name
       }pokemon_v2_pokemonegggroups {
         pokemon_v2_egggroup {
           name
         }
       }
        is_legendary
    
        id
      }
      
      generations: pokemon_v2_generation {
        name
        pokemon_species: pokemon_v2_pokemonspecies_aggregate {
          aggregate {
            count
          }
        }
      }
    }
    `
     const { result, loading, error } = useQuery(CHARACTERS_QUERY);

     const favorites = reactive(new Set<number>());

     const favePokemon = (pokemonId: number): void => {
       if (favorites.has(pokemonId)) {
         favorites.delete(pokemonId);
       } else {
         favorites.add(pokemonId);
       }
     };
   
     return { result, loading, error, favorites, favePokemon };
})
