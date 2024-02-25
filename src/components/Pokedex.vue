


<template>
<v-container >

  <!-- <v-text-field
        v-model="search"
        label="Search for pokemon"
        prepend-inner-icon="mdi-magnify"
        single-line
        variant="outlined"
        hide-details
      ></v-text-field> -->
    <v-row v-for="pokemon in result.gen3_species" :key="pokemon.id" >
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
        <v-card-text class="pb-0">
          <p>
           {{ 'Color: '+ pokemon.pokemon_v2_pokemoncolor.name }}
          </p>
          <p>   {{ 'Legendary: ' + pokemon.is_legendary }}</p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            variant="text"
            color="teal-accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
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
<script >
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import Favorite from './Favorite.vue';
import { computed } from 'vue';

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
  data () {
    const { result, loading, error } = useQuery(CHARACTERS_QUERY);
    return {
    reveal: false,
      result,
      loading, 
      error,
      search:''
    }
  },
  // computed:{
  //   searchPokemon(){
  //     return this.result.gen3_species.filter(e => e.name.toLowerCase().indexOf(this.search.toLowerCase()));
  //   }
  // }
}
</script>
