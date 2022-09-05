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
    ]
  }

  toggleComplete = (id) => {
    this.setState((state) => {
      let r = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted }
        };
        return { ...todo };
      })
      console.log(r)
      return { todos: r }
    })
  }

  deleteTodo = () => {

  }


  render() {
    return (
      <section className='todoapp'>
        <Header />
        <Main todos={this.state.todos} toggleComplete={this.toggleComplete} />
      </section>
    )
  }
}
