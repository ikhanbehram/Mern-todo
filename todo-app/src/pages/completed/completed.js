import Layout from "../../components/layout/layout";
import List from "../../components/list/List";

const Completed = () => {
  return (
    <Layout>
      <h1 className="text-success">Completed</h1>
      <List text="read a book">
        <button className="btn btn-danger">Remove</button>
      </List>
    </Layout>
  );
};

export default Completed;
