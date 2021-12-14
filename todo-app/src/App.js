import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/layout/layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./pages/signup/SignUp";
import TodoList from "./pages/todolist/todoList";
import Completed from "./pages/completed/completed";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Signup />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/list" exact>
          <TodoList />
        </Route>
        <Route path="completed" exact>
          <Completed />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
