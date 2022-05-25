import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const apolloClient = (token: string | undefined) =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'http://192.168.10.58:4000/graphql',
      credentials: 'include',
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    }),
  });
