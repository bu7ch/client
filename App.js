import React from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { ApolloProvider } from '@apollo/react-hooks'

import AppContainer from './AppContainer'

const API_URL = '';
const clink = createHttpLink({
  uri: API_URL
})
const authLink = setContext(async (_, {headers}) => {
  const token = await AsyncStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}`: '',
    },
  }
})
const cache = new InMemoryCache()

const client = new ApolloClient({
  link: authLink.concat(clink),
  cache,
})


const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  );
}


export default App;