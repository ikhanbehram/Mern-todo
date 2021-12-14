import { Link, useHistory } from "react-router-dom";
import FormComponent from "../../components/form/form";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/reducers/auth.reducer";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let { isLoading, isAuthenticated, error } = useSelector(
    (state) => state.auth
  );

  const onSubmit = (data) => {
    try {
      dispatch(signup(data));
      if (isAuthenticated) {
        history.replace("/list");
      }
    } catch (err) {
      error = err.message;
    }
  };

  return (
    <>
      <FormComponent title="Signup" onSubmit={onSubmit} />
      {/* {error && (
      <div className="col-6 offset-4 pr-5 pt-3 pr-5">
        <h3 className="text-danger">Auth Failed</h3>
      </div>
    )} */}
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
