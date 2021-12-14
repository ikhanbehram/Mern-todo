import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/layout";
import List from "../../components/list/List";
import {
  deleteTodo,
  getCompleted,
} from "../../store/reducers/todoList.reducer";

const Completed = () => {
  const dispatch = useDispatch();
  const { completedTodos: todos } = useSelector((state) => state.todo);
  console.log(todos, "asdasd");

  const removeTodo = (id) => {
    console.log("dispatched");
    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    dispatch(getCompleted());
  }, []);
  return (
    <Layout>
      <h1 className="text-success">Completed</h1>
      {!todos.length > 0 && <h2 className="text-center text-success"></h2>}
      {todos &&
        todos.map((todo) => {
          return (
            <List text={todo.title} key={todo.id}>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => {
                  removeTodo(todo.id);
                }}
              >
                Remove
              </button>
            </List>
          );
        })}
    </Layout>
  );
};

export default Completed;
