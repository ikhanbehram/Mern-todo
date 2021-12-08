import { Link } from "react-router-dom";
import FormComponent from "../../components/form/form";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/reducers/auth.reducer";

const Signup = () => {
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated, token } = useSelector(
    (state) => state.auth
  );
  const onSubmit = (data) => {
    dispatch(signup(data));
  };

  return isLoading ? (
    <p>Loading....</p>
  ) : (
    <>
      <FormComponent title="Signup" onSubmit={onSubmit} />
      <div className="row">
        <div className="col-6 offset-2 pt-2 pl-5">
          <p>
            Already have account? click here to <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
