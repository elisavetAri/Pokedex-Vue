
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'
import vuetify from './plugins/vuetify'

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://beta.pokeapi.co/graphql/v1beta'
}) 

createApp(App).use(vuetify).provide(DefaultApolloClient, apolloClient).mount('#app')
