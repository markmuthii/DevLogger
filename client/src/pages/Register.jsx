import { AuthForm } from "../components/AuthForm";
import { Button } from "../components/Button";

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

        <Button type={"submit"}>Register</Button>
      </AuthForm>
    </>
  );
};

export { RegisterPage };
