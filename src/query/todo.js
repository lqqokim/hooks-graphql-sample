import gql from 'graphql-tag';

export const GET_TODOS = gql`
  query {
    todos {
     name
     done 
    }   
  }
`;

export const CREATE_TODO = gql`
  mutation CreateTodo($input: TodoInput) {
    createTodo(input: $input) {
      name
      done
    }
  } 
`

export const DELETE_TODO = gql`
  mutation DeleteTodo($_id: String) {
    deleteTodo(_id: $_id) {
      _id
      name
      done
    }
  }
`

export const UPDATE_TODO = gql`
  mutation UpdateTodo($_id: String, $input: TodoInput ) {
    updateTodo(_id: $_id, input: $input) {
      _id
      name
      done
    }
  }
`