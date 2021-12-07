import { Modal, ModalBody, ModalTitle, Form, ModalFooter, Button } from "react-bootstrap"
import ModalHeader from "react-bootstrap/ModalHeader";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


const ModalComponent = ({show,hide}) => {
   const schema = yup.object({
       todo : yup.string().max(15, "Cannot exceed more than 15 words").required()
   }).required();
 
   const {register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

 const onAddTodo = (data)=>{ console.log(data) }
 


    return  (
        <>
         <Modal show={show} onHide={hide}>
             <ModalHeader closeButton>
                 <ModalTitle>Adding Todo</ModalTitle>
             </ModalHeader>
             <form onSubmit={handleSubmit(onAddTodo)}>
             <ModalBody>
            <Form.Group>
                <Form.Label>Todo Text:</Form.Label>
                <Form.Control type="text" placeholder="E-g Read a book" {...register('todo')}></Form.Control>
            </Form.Group>
            {errors.todo && <p>{errors.todo.message}</p>}
           
             </ModalBody>
             <ModalFooter>
                 <Button variant="secondary" type="button">Close</Button>
                 <Button variant="info" type="submit">Save Todo</Button>
             </ModalFooter>
             </form>
         </Modal>
        </>
    )
}

export default ModalComponent