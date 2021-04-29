import React, { useState,useEffect } from "react";
import './App.css';
//Components
import Form from './components/Form';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  //State
  const [inputText, setInputText] = useState(""); //input
  const [todos, setTodos] = useState([]); //list
  const [status, setStatus] = useState('all'); //states dos botoes
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //Use Effect
  useEffect(() => {
     filterHandler();
  }, [todos,status]);

  //Functions
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'active':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header>todos</header>
      <main>
      <section className="container">
        <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}>
        </Form>
        <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}></TodoList>
        <Footer setTodos={setTodos} todos={todos} setStatus={setStatus}></Footer>
        
      </section>
      </main>
    </div>
  );
}

export default App;
