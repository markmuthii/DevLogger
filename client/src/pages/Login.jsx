import { Link } from "react-router";

const LoginPage = () => {
  return (
    <>
      <div>Login Form</div>

      <p>
        Don't have an account? <Link to={"/register"}>Register</Link>
      </p>
    </>
  );
};

export { LoginPage };
