import ApolloClient from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link: createHttpLink({
        uri: process.env.GRAPHQL_URI
    }),
    cache: new InMemoryCache()
});

export default client;