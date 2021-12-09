import {
  Modal,
  ModalBody,
  ModalTitle,
  Form,
  ModalFooter,
  Button,
} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ModalComponent = ({ show, onHideModal, onSubmitForm }) => {
  const schema = yup
    .object({
      task: yup
        .string()
        .max(15, "Cannot exceed more than 15 characters")
        .required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Modal show={show} onHide={onHideModal}>
        <ModalHeader closeButton>
          <ModalTitle>Add todo</ModalTitle>
        </ModalHeader>
        <form>
          <ModalBody>
            <Form.Group>
              <Form.Label>Todo Text:</Form.Label>
              <Form.Control
                type="text"
                placeholder="E-g Read a book"
                {...register("task")}
              ></Form.Control>
            </Form.Group>
            {errors.task && <p>{errors.task.message}</p>}
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" type="button" onClick={onHideModal}>
              Close
            </Button>
            <Button
              variant="info"
              type="submit"
              onClick={handleSubmit(onSubmitForm)}
            >
              Save
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
};

export default ModalComponent;
