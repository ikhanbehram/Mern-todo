import { Button, Form } from 'react-bootstrap';
import Layout from '../layout/layout';
import classes from './form.module.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
 

const FormComponent = ({title}) => {

    const schema = yup.object({
        username: yup.string().required(),
        password: yup.string().min(6, "password must be five characters long").required()
    }).required();


    const {register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) =>{console.table(data)}
    return (
       <Layout>
           <h1 className={classes.title}>{title}</h1>
            <form className={classes.formClass} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" placeholder="Name" {...register('username')}></Form.Control>
            </Form.Group>
            { errors.username && <p className={classes.error}> { errors.username.message } ! </p>}
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" {...register('password')}></Form.Control>
            </Form.Group>
            { errors.password && <p className={classes.error}> {errors.password.message}  !</p> }
            <Button type="submit" className="mt-3 btn-block" >Submit</Button>
        </form>
       </Layout>
    )
}


export default FormComponent;