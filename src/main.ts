
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { POKEAPI_GRAPHQL } from './constants'
import { createPinia } from 'pinia'

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: POKEAPI_GRAPHQL
}) 

const pinia = createPinia()

createApp(App).use(vuetify).use(pinia).provide(DefaultApolloClient, apolloClient).mount('#app')
