import { AuthForm } from "../components/AuthForm";
import { Button } from "../components/Button";

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

        <Button type={"submit"}>Login</Button>
      </AuthForm>
    </>
  );
};

export { LoginPage };
