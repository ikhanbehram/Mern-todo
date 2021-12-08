import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/layout/layout";
import { Route, Switch } from "react-router-dom";
import Signup from "./pages/signup/SignUp";
import TodoList from "./pages/todolist/todoList";
import Completed from "./pages/completed/completed";
import Login from "./pages/login/Login";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <Signup />
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/list">
          <TodoList></TodoList>
        </Route>
        <Route path="/completed">
          <Completed></Completed>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
