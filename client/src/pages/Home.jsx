import { Link } from "react-router";
import { Button } from "../components/Button";

const HomePage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold uppercase">Welcome to DevLogger</h1>

      <p className="text-gray-500 mt-4 text-lg text-center">
        Get started by logging in or registering for an account.
      </p>

      <div className="space-x-4 mt-4">
        <Link to={"/login"}>
          <Button type={"button"}>Login</Button>
        </Link>
        <Link to={"/register"}>
          <Button type={"button"}>Register</Button>
        </Link>
      </div>
    </>
  );
};

export { HomePage };
