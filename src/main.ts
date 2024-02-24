
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// const cache = new InMemoryCache()

// const apolloClient = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: 'https://beta.pokeapi.co/graphql/v1beta',

// })

// const app = createApp({
//   setup () {
//     provide(DefaultApolloClient, apolloClient)
//   },

//   render: () => h(App),
// })

// app.mount('#app');

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://beta.pokeapi.co/graphql/v1beta'
}) 

createApp(App).use(vuetify).provide(DefaultApolloClient, apolloClient).mount('#app')
