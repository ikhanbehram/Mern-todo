import { ListGroup, ListGroupItem }  from 'react-bootstrap'
import Layout from '../layout/layout';

const TodoList = ({text})=>{
    return (
        <Layout>
            <div className="d-flex justify-content-between align-items-center">
              <h1>MY Todo List</h1>
              <button className="btn btn-primary">AddTodo +</button>
            </div>
            <br/>
            <ListGroup>
            <ListGroupItem className="d-flex justify-content-between align-items-center">
                <div>{text}</div>
                <div>
                    <button className="btn btn-sm btn-success">Completed</button>
                    <button className="btn btn-sm btn-info">Edit</button>
                    <button className="btn btn-sm btn-danger">Remove</button>
                </div>
            </ListGroupItem>
        </ListGroup>
        </Layout>
    )
}

export default TodoList;