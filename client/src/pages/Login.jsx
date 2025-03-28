import { AuthForm } from "../components/AuthForm";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const LoginPage = () => {
  return (
    <>
      <AuthForm title={"Login"}>
        <Input type="text" placeholder="Username" required />

        <Input type="password" placeholder="Password" required />

        <Button type={"submit"}>Login</Button>
      </AuthForm>
    </>
  );
};

export { LoginPage };
