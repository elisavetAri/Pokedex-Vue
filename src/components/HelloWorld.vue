
<template>
  <v-card
    class="mx-auto"
    width="400"
    prepend-icon="mdi-thumb-up"
    v-for="pokemon in result.gen3_species"
    :key="pokemon.id"
  >
    <template v-slot:title >
      {{ pokemon.name }}
    </template>

    <v-card-text>
      {{ pokemon.id }}
    </v-card-text>
  </v-card>
</template>

<script>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'


const CHARACTERS_QUERY = gql`
query samplePokeAPIquery {
gen3_species: pokemon_v2_pokemonspecies(where: {pokemon_v2_generation: {name: {_eq: "generation-iii"}}}, order_by: {id: asc}) {
  name
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
      result,
      loading, 
      error
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>