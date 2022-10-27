import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';
export default function App() {
  const [todos, setTodos] = useState([
    {
      label: 'Completed task',
      isCompleted: true,
      id: uuidv4(),
      date: new Date('2000-01-01'),
      timer: 3,
    },
    {
      label: 'Editing task',
      isCompleted: false,
      id: uuidv4(),
      date: new Date(0),
      timer: 63,
    },
    {
      label: 'Active task',
      isCompleted: false,
      id: uuidv4(),
      date: new Date(8.64e15),
      timer: 203,
    },
  ]);

  const [filter, setFilter] = useState('all');
  const [visibleTodos, setVisibleTodos] = useState(todos);

  useEffect(() => {
    setVisibleTodos(filterFunc(todos, filter));
  }, [filter, todos]);

  const findIndexById = (id) => todos.findIndex((el) => el.id === id);

  const setTimer = (timeLeft, id) => {
    const idx = findIndexById(id);
    const newItem = Object.assign(todos[idx], { timer: timeLeft });
    const newArray = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];
    setTodos(newArray);
  };

  const createTodo = (label, timer) => {
    return {
      label,
      isCompleted: false,
      id: uuidv4(),
      date: new Date(),
      timer,
    };
  };

  const addTodo = (label, timer) => {
    const newItem = createTodo(label, timer);
    const newArr = [...todos, newItem];
    setTodos(newArr);
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
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return { ...todo };
    });

    setTodos(newArray);
  };

  const deleteTodo = (id) => {
    const idx = findIndexById(id);
    const newArray = [...todos.slice(0, idx), ...todos.slice(idx + 1)];
    setTodos(newArray);
  };

  const clearCompleted = () => {
    const newArr = todos.filter((el) => !el.isCompleted);
    setTodos(newArr);
  };

  const edit = (id, text) => {
    const idx = findIndexById(id);
    const newItem = { ...todos[idx], label: text };
    const newArray = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];
    setTodos(newArray);
  };

  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <section className="main">
        <TaskList
          todos={visibleTodos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          edit={edit}
          setTimer={setTimer}
        />
        <Footer todos={todos} filter={filter} clearCompleted={clearCompleted} onFilterChange={onFilterChange} />
      </section>
    </section>
  );
}
