<script setup lang="ts">
import { computed } from 'vue';
import { Store } from './store/store';

const props = defineProps<{pokemonId: number}>();
const store = Store()
const {favePokemon} = store;
const buttonColor = computed(() =>
  store.favorites.has(props.pokemonId) ? 'red' : 'primary'
);
</script>
<template>
    <v-btn
      size="small"
      :color="buttonColor"
      variant="text"
      icon="mdi-heart"
      @click="favePokemon(pokemonId)"
    >
    </v-btn>
  </template>