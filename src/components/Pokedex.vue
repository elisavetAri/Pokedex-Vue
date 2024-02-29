


<template>
<v-container >
<v-row>
  <pokemon-card></pokemon-card>
  <v-btn
    v-if="!onlyFavorites"
      class="mt-8"
      :loading="loading"
      @click="loadMore"
      >Load More pokemon </v-btn
    >
    </v-row>
  </v-container>
 
  
    </template>
<script setup lang="ts" >
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
// import Favorite from './Favorite.vue';
import { computed, ref } from 'vue';
import { Pokemon } from './types'
import { pokemonStore } from './store/store';
import { storeToRefs } from 'pinia';

const store = pokemonStore();
const { result, loading, error, favorites } = storeToRefs(store);
const { loadMore } = store;
const currentItem = ref<number>(0);

const onlyFavorites = computed(() => Boolean(currentItem.value));
</script>
