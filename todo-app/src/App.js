import React from 'react';
import TodoTemplate from './Components/TodoTemplate';
import TodoInsert from './Components/TodoInsert';
import TodoList from './Components/TodoList';
import './App.css';

const App =()=>{
  return <TodoTemplate>
    <TodoInsert/>
    <TodoList/>
  </TodoTemplate>
};

export default App;
