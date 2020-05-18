import ApolloClient from 'apollo-boost'; // Apollo Client를 설정하는데 필요한 것이 들어있는 패키지
import { createHttpLink } from 'apollo-link-http'; // 원격 데이터 불러오기에 필요한 Apollo Link
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link: createHttpLink({
        uri: process.env.GRAPHQL_URI
    }),
    cache: new InMemoryCache()
});

export default client;