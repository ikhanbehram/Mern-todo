import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import FormComponent from "../../components/form/form";
import { login } from "../../store/reducers/auth.reducer";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/list");
    }
  }, [isAuthenticated]);
  const onSubmit = (data) => {
    dispatch(login(data));
  };
  return (
    <>
      <FormComponent title="Login" onSubmit={onSubmit} />
      {error && <h1>{error}</h1>}
    </>
  );
};

export default Login;
