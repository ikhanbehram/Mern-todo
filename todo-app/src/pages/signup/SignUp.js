import { Link } from "react-router-dom";
import FormComponent from "../../components/form/form";

const Signup = () => {
  return (
    <>
      <FormComponent title="Signup" />
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
