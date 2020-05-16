import React, { useState, useEffect, Fragment } from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoItem from './components/TodoItem';

const tasks = [
  { name: 'task 1', done: false },
  { name: 'task 2', done: false },
  { name: 'task 3', done: false },
];

const GET_TODOS = gql`
  query {
    todos {
     name
     done 
    }   
  }
  `;

function App() {
  const [todos, setTodos] = useState(tasks);
  const [inputValue, setInputValue] = useState("");

  //useEffect works basically as componentDidMount and componentDidUpdate
  // useEffect(() => {
  //   console.log('useEffect!!');
  //   let count = 0;
  //   todos.map(todo => (!todo.done ? count++ : null));
  //   // document.title = `${count} task${count > 1 ? "s" : ""} todo`;
  // }, [todos]);

  const _handleSubmit = e => {
    e.preventDefault();
    if (inputValue === "") return alert("Task name is required");

    const newTodos = todos.slice();
    newTodos.splice(0, 0, { name: inputValue, done: false });
    setTodos(newTodos);
    setInputValue("");
  };

  const _handleBntClick = ({ type, index }) => {
    const newTodos = todos.slice();
    if (type === "remove") newTodos.splice(index, 1);
    else if (type === "completed") newTodos[index].done = true;

    return setTodos(newTodos);
  };

  return (
    <Fragment>
      <TodoInsert
        onSubmit={_handleSubmit}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <ul>
        <Query query={GET_TODOS}>
          {
            ({ loading, data, error }) => {
              console.log(loading, data, error);

              if (loading) {
                return <span>Loading...</span>
              } else if (error) {
                return <span>{error}</span>
              }

              return data.todos.map((item, index) => {
                return (
                  <TodoItem
                    key={index}
                    todo={item}
                    remove={() => _handleBntClick({ type: "remove", index })}
                    completed={() => _handleBntClick({ type: "completed", index })}
                  />
                )
              })
            }
          }
        </Query>

        {/* {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            remove={() => _handleBntClick({ type: "remove", index })}
            completed={() => _handleBntClick({ type: "completed", index })}
          />
        ))} */}
      </ul>
    </Fragment>
  );
}

export default App;
