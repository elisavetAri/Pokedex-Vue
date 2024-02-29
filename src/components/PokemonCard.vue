


<template>
  <v-container >
      <v-row v-for="pokemon in result?.gen3_species" :key="pokemon.id" >
        <v-col cols="12" md="4">
          <v-card class="mx-auto" 
          variant="tonal"
          style="height: 100%;  width: 80%;"
                  :class="['d-inline-flex align-center']"
                  dark> 
                  <div
                    class="text-h6 flex-grow-1 text-center"
                  >
                  </div>
                  <pokemon-image :pokemon-id="pokemon.id">
              <v-card-title class="text-h6 text-left text-left" >{{ pokemon.name }}
                </v-card-title>
            <v-img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/
                {{ pokemon.id }}.png"> </v-img>
            </pokemon-image>
            <v-card-actions >
        <v-btn
          variant="text"
          color="teal-accent-4"
          @click="reveal = true"
        >
          Learn More
        </v-btn>
      </v-card-actions>     
      <v-expand-transition>


      <v-card
v-if="reveal"
class="v-card--reveal"
style="height: 100%; width: 80%;"
>
<reavel-card :pokemons="pokemon"></reavel-card> 

</v-card>
      </v-expand-transition>  
    
      <v-card-actions>
              <v-spacer></v-spacer>
              <Favorite :pokemon-id="pokemon.id"></Favorite>
            </v-card-actions>
          </v-card>
     
        </v-col>
      </v-row>
    </v-container>
   
    
      </template>
  <script  lang="ts" >
  import gql from 'graphql-tag'
  import { useQuery } from '@vue/apollo-composable'
  
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
  
  export default {
    name: 'App',
    data (Props) {
      const { result, loading, error } = useQuery(CHARACTERS_QUERY);
      return {
      reveal: false,
        result,
        loading, 
        error,
        search:''
      }
    },
  }
  </script>
  