import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FormComponent from './components/form/form';
import TodoList from './components/todolist/todoList';
import Layout from './components/layout/layout';
import ModalComponent from './components/modal/Modal';
import { useState } from 'react';
import { Route } from 'react-router-dom'
import Signup from './pages/signup/SignUp';

function App() {
  
  return (
    <Layout>
     <Route path="/" exact={true}>
       <Signup/>
     </Route>
     <Route path="/list">
     <TodoList></TodoList>
     </Route>
    </Layout>
  )
}

export default App;
