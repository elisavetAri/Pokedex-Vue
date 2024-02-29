<template>
<v-container v-if="pokemons">
    <v-row>
        <v-col v-for="pokemon in pokemons" :key="pokemon.id">
<v-card-text  class="pb-0">
  <p>
   {{ 'Color: '+ pokemon.pokemon_v2_pokemoncolor?.name }}
  </p>
  <p>   {{ 'Legendary: ' + pokemon.is_legendary }}</p>
</v-card-text>
<v-card-actions class="pt-0">
  <v-btn
    variant="text"
    color="teal-accent-4"
  >
    Close
  </v-btn>
</v-card-actions>
</v-col>
</v-row>
</v-container>
</template>



<script setup lang="ts">
import { Pokemon } from './types';

 
 interface Props {
    pokemons: Pokemon[]
 }

 defineProps<Props>();
</script>
