import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/layout";
import List from "../../components/list/List";
import { getCompleted } from "../../store/reducers/todoList.reducer";

const Completed = () => {
  const { completedTodos } = useSelector((state) => state.todo);
  console.log(completedTodos, "asdasd");
  const dispatch = useDispatch();
  const getTodos = () => {
    dispatch(getCompleted());
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Layout>
      <h1 className="text-success">Completed</h1>
      {completedTodos.map((todo) => {
        <List text={todo.title} key={todo.id}>
          <button className="btn btn-danger">Remove</button>
        </List>;
      })}
    </Layout>
  );
};

export default Completed;
