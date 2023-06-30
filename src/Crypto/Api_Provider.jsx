import React from 'react';
import AppCrypto from './App_crypto';

import { ApolloClient, InMemoryCache, ApolloProvider, gql, from, HttpLink } from '@apollo/client';
import { onError } from "@apollo/client/link/error";

///////////////
const ApiProvider = () => {
  // const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
  // const BASE_URL = "https://api.coingecko.com/api/v3"
  const BASE_URL = "https://beta.pokeapi.co/graphql/v1beta"
  // const BASE_URL = "http://localhost:3003/graphql"

  const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        alert(`Graphql error ${message}`);
      });
    }
  });

  const link = from([
    errorLink,
    new HttpLink({ uri: BASE_URL }),
  ]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

  // client
  //   .query({
  //     query: gql`
  //     query GetLocations {
  //       locations {
  //         id
  //         symbol
  //         name
  //         image
  //         current_price
  //       }
  //     }
  //   `,
  //   })
  //   .then((result) => console.log(result));

  return (
    <ApolloProvider client={client}>
      <AppCrypto />
    </ApolloProvider>
  );
}

export default ApiProvider;
