<script setup lang="ts">
import { POKEAPI_IMAGE } from '@/constants';
import { computed } from 'vue';

const props = defineProps<{ pokemonId: number }>();
const imageUrl = computed(() =>
  POKEAPI_IMAGE.replace(':pokeId', String(props.pokemonId))
);
</script>

<template>
  <v-img class="align-end" height="200" :src="imageUrl">
    <slot></slot>
  </v-img>
</template>
