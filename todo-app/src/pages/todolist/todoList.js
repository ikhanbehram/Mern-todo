import Layout from "../../components/layout/layout";
import List from "../../components/list/List";
import { Link } from "react-router-dom";
import classes from "./todoList.module.css";
import ModalComponent from "../../components/modal/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  CompleteTodo,
  deleteTodo,
  getTodo,
} from "../../store/reducers/todoList.reducer";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const getTodos = () => {
    try {
      console.log("dispatching now");
      dispatch(getTodo());
    } catch (err) {
      console.log(err);
    }
  };

  const onAdd = (FormData) => {
    try {
      console.log("dispatching");
      dispatch(addTodo(FormData));
      hideModalHandler();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  const [show, showModal] = useState(false);
  const onComplete = (id) => {
    try {
      dispatch(CompleteTodo(id));
    } catch (err) {
      console.log(err);
    }
  };
  const onRemove = (id) => {
    try {
      dispatch(deleteTodo(id));
    } catch (err) {
      console.log(err);
    }
  };
  const hideModalHandler = () => {
    showModal(false);
  };
  const showModalHandler = () => {
    showModal(true);
  };
  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-6 offset-6 pl-5 mb-5">
            <button className="btn btn-outline-success  btn-lg">
              <Link className={classes.link} to="/completed">
                See completed Todo's
              </Link>
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="text-info">MY Todo List</h1>
          <button className="btn btn-primary" onClick={showModalHandler}>
            AddTodo +
          </button>
        </div>
        <br />
        {todos.length < 1 && (
          <h1 className="text-success text-center mt-5 pt-3">
            You have no tasks Left
          </h1>
        )}
        {todos.map((todo) => (
          <List text={todo.title} key={todo.id}>
            {!todo.completed && (
              <button
                className="btn btn-sm btn-success"
                onClick={() => {
                  onComplete(todo.id);
                }}
              >
                Completed
              </button>
            )}
            <button
              className="btn btn-sm btn-danger"
              onClick={() => onRemove(todo.id)}
            >
              Remove
            </button>
          </List>
        ))}
      </Layout>
      <ModalComponent
        show={show}
        onHideModal={hideModalHandler}
        onSubmitForm={onAdd}
      />
    </>
  );
};

export default TodoList;
