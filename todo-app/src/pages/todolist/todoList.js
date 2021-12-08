import Layout from "../../components/layout/layout";
import List from "../../components/list/List";
import { Link } from "react-router-dom";
import classes from "./todoList.module.css";
import ModalComponent from "../../components/modal/Modal";
import { useState } from "react";

const TodoList = ({ text }) => {
  const [show, showModal] = useState(false);
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
        <List text="Read a book">
          <button className="btn btn-sm btn-success">Completed</button>
          <button className="btn btn-sm btn-info">Edit</button>
          <button className="btn btn-sm btn-danger">Remove</button>
        </List>
      </Layout>
      <ModalComponent show={show} onHideModal={hideModalHandler} />
    </>
  );
};

export default TodoList;
