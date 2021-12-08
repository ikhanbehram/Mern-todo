import FormComponent from "../../components/form/form";

const Login = () => {
  const onSubmit =(data)=>{console.log("From Login")}
  return <FormComponent title="Login" onSubmit={onSubmit}/>;
};

export default Login;
