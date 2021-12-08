import { ListGroup, ListGroupItem } from "react-bootstrap";

const List = ({ text, children }) => {
  return (
    <ListGroup className="pt-3">
      <ListGroupItem className="d-flex justify-content-between align-items-center">
        <div>{text}</div>
        <div>{children}</div>
      </ListGroupItem>
    </ListGroup>
  );
};

export default List;
