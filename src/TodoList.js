import React from 'react';
import compose from 'recompose/compose';
import withState from 'recompose/withState';

import { withTodo } from './Client'

const TodoListPure =({
  currentTodos,
  addTodoMutation,
  clearTodoMutation,
  todoText,
  setTodoText,
}) => (
  <div>
    <h1>Todos</h1>
    {
        currentTodos.map((todo, index) => {
            return <div key={index}> {todo} </div>
        })
    }
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Todo</label>
            <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Pick up milk, Grab, cheese, etc"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
        </div>
        <input
            type='submit'
            class="btn btn-primary"
            value='Add'
            onClick={(e) => {
                e.preventDefault()
                addTodoMutation({variables: {item: todoText}});
                setTodoText("")
            }}
        />
        <input
            type='submit'
            class="btn btn-warning"
            value='Clear All'
            onClick={(e) => clearTodoMutation()}
        />
    </form>
  </div>
);

const TodoList = compose(
  withTodo,
  withState('todoText', 'setTodoText', ''),
)(TodoListPure);

export default TodoList;