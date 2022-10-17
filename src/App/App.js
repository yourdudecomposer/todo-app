import React, { useState } from 'react';

import './App.css';

import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';
export default function App() {
  const [todos, setTodos] = useState([
    {
      label: 'Completed task',
      isCompleted: true,
      isEditing: false,
      id: 1,
      date: new Date(),
      timer: 3,
    },
    {
      label: 'Editing task',
      isCompleted: false,
      isEditing: true,
      id: 2,
      date: new Date(),
      timer: 63,
    },
    {
      label: 'Active task',
      isCompleted: false,
      isEditing: false,
      id: 3,
      date: new Date(),
      timer: 203,
    },
  ]);

  const [filter, setFilter] = useState('all');

  let todoId = todos[todos.length - 1].id + 1;

  const addTodo = (todo) => {
    const [label, min, sec] = Array.from(todo).map((el) => el.value);
    const newItem = {
      label,
      isCompleted: false,
      isEditing: false,
      id: todoId,
      date: new Date(),
      timer: min * 60 + Number(sec),
    };

    setTodos((state) => [...state, newItem]);
  };

  const filterFunc = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;

      case 'active':
        return items.filter((item) => !item.isCompleted);

      case 'done':
        return items.filter((item) => item.isCompleted);

      default:
        return items;
    }
  };

  const onFilterChange = (filter) => {
    setFilter(filter);
  };

  const toggleComplete = (id) => {
    setTodos((todos) => {
      let newArray = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return { ...todo };
      });
      return newArray;
    });
  };

  const deleteTodo = (id) => {
    setTodos((todos) => {
      const idx = todos.findIndex((el) => el.id === id);

      const newArray = [...todos.slice(0, idx), ...todos.slice(idx + 1)];
      return newArray;
    });
  };

  const clearCompleted = () => {
    setTodos((todos) => {
      const newArr = todos.filter((el) => !el.isCompleted);
      return newArr;
    });
  };

  const startEditTodo = (id) => {
    setTodos((todos) => {
      let newArray = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: true };
        }
        return { ...todo };
      });
      return newArray;
    });
  };

  const saveEditingTodo = (e, id, text) => {
    if (e.keyCode === 13) {
      setTodos((todos) => {
        const idx = todos.findIndex((el) => el.id === id);
        const newItem = { ...todos[idx], isEditing: false, label: text };
        const newArray = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];
        return newArray;
      });
    }
  };

  const visibleTodos = filterFunc(todos, filter);
  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <section className="main">
        <TaskList
          todos={visibleTodos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          saveEditingTodo={saveEditingTodo}
          startEditTodo={startEditTodo}
        />
        <Footer todos={visibleTodos} filter={filter} clearCompleted={clearCompleted} onFilterChange={onFilterChange} />
      </section>
    </section>
  );
}
