<!-- <template>

  <h1> POKEDEX</h1>
  
  <ul :class="'result.gen3_species'" v-for="pokemon in result.gen3_species" :key="pokemon.id">
  <li>{{ pokemon.name }}</li>
  <li>{{ pokemon.id }}</li>
  </ul>
  
  
  
  
  
  
  
   <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <p v-else v-for="pokemon in result.gen3_species" :key="pokemon.id">
  
      {{ pokemon.name }}  {{ pokemon.id }}
    </p> 
  
    <div></div>
  </template>
   -->

  <template>
      <!-- <ul :class="'result.gen3_species'" v-for="pokemon in result.gen3_species" :key="pokemon.id">
  <li>{{ pokemon.name }}</li>
  <li>{{ pokemon.id }}</li>
  </ul>
   -->
    <v-card
    :class="'result.gen3_species'" v-for="pokemon in result.gen3_species" :key="pokemon.id"
      class="mx-auto"
      width="400"
      prepend-icon="mdi-home"
    >
      <template v-slot:title>
     
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