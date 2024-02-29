import { defineStore } from "pinia";
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { reactive } from "vue";

export const pokemonStore = defineStore('pokemonStore', () =>{
    const CHARACTERS_QUERY = gql`
    query samplePokeAPIquery($offset: Init, $limit: Init) {
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
     const { result, loading, error, fetchMore } = useQuery(CHARACTERS_QUERY,()=>({
      offset: 0,
      limit: 5,
     }));

     function loadMore(): void {
       fetchMore({
        variables: {
          offset: result.value.gen3_species.length,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult;
  
          return {
            ...previousResult,
            gen3_species: [
              ...previousResult.gen3_species,
              ...fetchMoreResult.gen3_species,
            ],
          };
        },
      });
    }
     const favorites = reactive(new Set<number>());

     const favePokemon = (pokemonId: number): void => {
       if (favorites.has(pokemonId)) {
         favorites.delete(pokemonId);
       } else {
         favorites.add(pokemonId);
       }
     };
   
     return { result, loading, error, favorites, favePokemon, loadMore };
})
