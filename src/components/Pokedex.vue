
  <template>

    <v-card style="overflow: initial; z-index: initial"
    :class="'result.gen3_species'" v-for="pokemon in result.gen3_species" :key="pokemon.id"
      class="mx-auto"
      max-width="344"
      variant="tonal"
      hover
      link
    >
         <v-card-text>
        {{'Name: ' + pokemon.name }} <br>
        {{ 'ID: '+ pokemon.id }}
        <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        Pokemon Details
      </v-btn>
      <!-- <v-spacer></v-spacer> -->
      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>
    <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>
      </v-card-text>
  
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
        {{ 'Color: '+ pokemon.pokemon_v2_pokemoncolor.name }}  <br>
        {{ 'Legendary: ' + pokemon.is_legendary }}
        </v-card-text>
      </div>
    </v-expand-transition>
 
    </v-card>
  </template>


<script>
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
  data () {
    const { result, loading, error } = useQuery(CHARACTERS_QUERY);
    return {
      show: false,
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