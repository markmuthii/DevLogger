import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <>
      <div>Register Form</div>

      <p>
        Already have an account? <Link to={"/login"}>Login</Link>
      </p>
    </>
  );
};

export { RegisterPage };
