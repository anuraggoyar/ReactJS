import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/About';

import React, { useState , useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodos;
  if (localStorage.getItem("todos") === null ){
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(todos.filter( item => item !== todo ));
  };

  const addTodo = (title, desc) =>{
    const id =  todos.length > 0 ? todos[todos.length -1].id +1 : 0;
    const todo = {
      id : id,
      title : title,
      desc : desc
    };
    setTodos([...todos,todo]);
  };

  const [todos , setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <React.Fragment>
      <Router>
        <Header title="ToDo Application" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo}/>
                <Todos todos={todos} onDelete={onDelete}/>
              </>
            );
          }}>
          </Route>
          <Route exact path="/about" render={() => {
            return (<About />);
          }}>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
