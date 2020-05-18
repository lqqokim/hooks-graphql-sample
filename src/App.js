import React, { useState, useEffect, Fragment } from "react";
import { useQuery, useMutation } from '@apollo/react-hooks';

import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoItem from './components/TodoItem';
import { GET_TODOS, CREATE_TODO, DELETE_TODO } from './query/todo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const { loading, error, data } = useQuery(GET_TODOS);
  const [createTodo] = useMutation(CREATE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);

  //useEffect works basically as componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log(data);
    data?.todos && setTodos(data.todos);
    // let count = 0;
    // todos.map(todo => (!todo.done ? count++ : null));
    // document.title = `${count} task${count > 1 ? "s" : ""} todo`;
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const _handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue === "") return alert("Task name is required");
    const input = {
      name: inputValue,
      done: false
    };

    // Query Mutation
    await createTodo({
      variables: {
        input
      }
    });

    const newTodos = todos.slice();
    newTodos.splice(0, 0, input);
    setTodos(newTodos);
    setInputValue("");
  };

  const _handleBntClick = async ({ type, index }) => {
    const newTodos = todos.slice();
    if (type === "remove") {
      newTodos.splice(index, 1);

      const _id = newTodos.filter((item, idx) => {
        return index === idx;
      });

      console.log('_id ', _id);

      await deleteTodo({
        variables: {
          _id
        }
      });
    }
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
        {todos.map((item, index) => {
          return (
            <TodoItem
              key={index}
              todo={item}
              remove={() => _handleBntClick({ type: "remove", index })}
              completed={() => _handleBntClick({ type: "completed", index })}
            />
          )
        })}
      </ul>
    </Fragment>
  );
}

export default App;
