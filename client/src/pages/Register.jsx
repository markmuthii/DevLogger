import { Link } from "react-router";
import { AuthForm } from "../components/AuthForm";

const RegisterPage = () => {
  return (
    <>
      <AuthForm title={"Register"}>
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 p-2 rounded"
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="border border-gray-300 p-2 rounded"
          required
        />

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
          Register
        </button>
      </AuthForm>
    </>
  );
};

export { RegisterPage };
