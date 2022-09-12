import React, { Component } from 'react';

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';


export default class App extends Component {
  state = {
    todos: [
      { label: 'Completed task', isCompleted: true, isEditing: false, id: 1, date: new Date() },
      { label: 'Editing task', isCompleted: false, isEditing: true, id: 2, date: new Date() },
      { label: 'Active task', isCompleted: false, isEditing: false, id: 3, date: new Date() },
    ],
    filter: 'all'
  }

  todoId = 4;


  filter = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;

      case 'active':
        return items.filter(item => !item.isCompleted);

      case 'done':
        return items.filter(item => item.isCompleted);;

      default:
        return items;

    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  toggleComplete = (id) => {
    this.setState(state => {
      let newArray = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted }
        };
        return { ...todo };
      })
      return { todos: newArray }
    })
  }

  deleteTodo = (id) => {
    this.setState(state => {
      const idx = state.todos.findIndex(el => el.id === id);

      const newArray = [
        ...state.todos.slice(0, idx),
        ...state.todos.slice(idx + 1)
      ]
      console.log(state.todos[0] === newArray[0])
      return {
        todos: newArray
      }
    })
  }



  addTodo = (label) => {
    const newItem = {
      label,
      isCompleted: false,
      isEditing: false,
      id: this.todoId++,
      date: new Date()
    }
    this.setState(state => {
      const newArr = [
        ...state.todos,
        newItem
      ]
      return {
        todos: newArr
      }
    })
  }


  clearCompleted = () => {
    this.setState(state => {
      const newArr = state.todos.filter(el => !el.isCompleted);
      return {
        todos: newArr
      }
    })
  }

  saveEditingTodoSave = (e, id, label) => {
    if (e.keyCode === 13) {
      this.setState(state => {
        const idx = state.todos.findIndex(el => el.id === id);
        const newItem = { ...state.todos[idx], isEditing: false, label }
        const newArray = [
          ...state.todos.slice(0, idx),
          newItem,
          ...state.todos.slice(idx + 1)
        ]
        return {
          todos: newArray
        }
      })
    }
  }

  startEditTodo = (id) => {
    console.log(id)
    this.setState(state => {
      let newArray = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: true }
        };
        return { ...todo };
      })
      return { todos: newArray }
    })
  }

  saveEditingTodo = (e, id, text) => {
    if (e.keyCode === 13) {
      console.log(13)
      this.setState(state => {
        const idx = state.todos.findIndex(el => el.id === id);
        const newItem = { ...state.todos[idx], isEditing: false, label: text }
        const newArray = [
          ...state.todos.slice(0, idx),
          newItem,
          ...state.todos.slice(idx + 1)
        ]
        return {
          todos: newArray
        }
      })
    }
  }

  render() {
    const visibleTodos = this.filter(this.state.todos, this.state.filter);
    return (
      <section className='todoapp'>
        <Header addTodo={this.addTodo} />
        <Main
          todos={visibleTodos}
          toggleComplete={this.toggleComplete}
          clearCompleted={this.clearCompleted}
          deleteTodo={this.deleteTodo}
          filter={this.state.filter}
          onFilterChange={this.onFilterChange}
          saveEditingTodo={this.saveEditingTodo}
          startEditTodo={this.startEditTodo}
        />
      </section>
    )
  }
}
