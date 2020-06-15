import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { addTodoMutation, getTodosQuery } from '../../queries/Queries';

export const AddTodo = (props) => {
  const [todo, setTodo] = useState({
    title: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    props.addTodoMutation({
      variables: {
        title: todo.title,
      },
      refetchQueries: [{ query: getTodosQuery }],
    });
    setTodo({ title: '' });
  };
  return (
    <form onSubmit={handleSubmit} className="m-auto" style={{ width: '300px' }}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => setTodo({ title: e.target.value })}
          type="text"
          id="title"
          value={todo.title}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
};

export default graphql(addTodoMutation, { name: 'addTodoMutation' })(AddTodo);
