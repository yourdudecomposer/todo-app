import React, { Component } from 'react';

import './App.css';

import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';
export default class App extends Component {
  state = {
    todos: [
      {
        label: 'Completed task',
        isCompleted: true,
        isEditing: false,
        id: 1,
        date: new Date(),
        timer: {
          min: 0,
          sec: 3,
        },
      },
      {
        label: 'Editing task',
        isCompleted: false,
        isEditing: true,
        id: 2,
        date: new Date(),
        timer: {
          min: 1,
          sec: 3,
        },
      },
      {
        label: 'Active task',
        isCompleted: false,
        isEditing: false,
        id: 3,
        date: new Date(),
        timer: {
          min: 3,
          sec: 23,
        },
      },
    ],
    filter: 'all',
  };

  todoId = 4;

  addTodo = (todo) => {
    const [label, min, sec] = Array.from(todo).map((el) => el.value);
    const newItem = {
      label,
      isCompleted: false,
      isEditing: false,
      id: this.todoId++,
      date: new Date(),
      timer: {
        min: Number(min),
        sec: Number(sec),
      },
    };
    this.setState((state) => {
      const newArr = [...state.todos, newItem];
      return {
        todos: newArr,
      };
    });
  };

  filter = (items, filter) => {
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

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  toggleComplete = (id) => {
    this.setState((state) => {
      let newArray = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return { ...todo };
      });
      return { todos: newArray };
    });
  };

  deleteTodo = (id) => {
    this.setState((state) => {
      const idx = state.todos.findIndex((el) => el.id === id);

      const newArray = [...state.todos.slice(0, idx), ...state.todos.slice(idx + 1)];
      return {
        todos: newArray,
      };
    });
  };

  clearCompleted = () => {
    this.setState((state) => {
      const newArr = state.todos.filter((el) => !el.isCompleted);
      return {
        todos: newArr,
      };
    });
  };

  saveEditingTodoSave = (e, id, label) => {
    if (e.keyCode === 13) {
      this.setState((state) => {
        const idx = state.todos.findIndex((el) => el.id === id);
        const newItem = { ...state.todos[idx], isEditing: false, label };
        const newArray = [...state.todos.slice(0, idx), newItem, ...state.todos.slice(idx + 1)];
        return {
          todos: newArray,
        };
      });
    }
  };

  startEditTodo = (id) => {
    this.setState((state) => {
      let newArray = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: true };
        }
        return { ...todo };
      });
      return { todos: newArray };
    });
  };

  saveEditingTodo = (e, id, text) => {
    if (e.keyCode === 13) {
      this.setState((state) => {
        const idx = state.todos.findIndex((el) => el.id === id);
        const newItem = { ...state.todos[idx], isEditing: false, label: text };
        const newArray = [...state.todos.slice(0, idx), newItem, ...state.todos.slice(idx + 1)];
        return {
          todos: newArray,
        };
      });
    }
  };

  render() {
    const visibleTodos = this.filter(this.state.todos, this.state.filter);
    return (
      <section className="todoapp">
        <Header addTodo={this.addTodo} />
        <section className="main">
          <TaskList
            todos={visibleTodos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            saveEditingTodo={this.saveEditingTodo}
            startEditTodo={this.startEditTodo}
          />
          <Footer
            todos={visibleTodos}
            filter={this.state.filter}
            clearCompleted={this.clearCompleted}
            onFilterChange={this.onFilterChange}
          />
        </section>
      </section>
    );
  }
}
