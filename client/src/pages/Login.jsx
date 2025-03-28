import { Link } from "react-router";
import { AuthForm } from "../components/AuthForm";

const LoginPage = () => {
  return (
    <>
      <AuthForm title={"Login"}>
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-300 p-2 rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 rounded"
          required
        />

        <button className="bg-blue-500 text-white p-2 rounded" type="submit">
          Login
        </button>
      </AuthForm>
    </>
  );
};

export { LoginPage };
