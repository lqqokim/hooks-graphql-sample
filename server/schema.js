import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Todo {
        _id: ID!
        name: String!
        done: Boolean!
    }

    type Query {
        todos: [Todo]
        todo(_id: ID!): Todo
    }

    input TodoInput {
        name: String!
        done: Boolean!
    }

    type Mutation {
        createTodo(input: TodoInput): Todo
        updateTodo(_id: ID!, input: TodoInput): Todo
        deleteTodo(_id: ID!): Todo
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;

/**
GraphQL는 typeDefs, resolvers를 정의해줘야합니다.
typeDefs에서는 어떤 타입으로 데이터를 받을 것인가에 대해 정의를 하고
schema에서는 스키마를 실행가능하게 만들어줍니다.
 */