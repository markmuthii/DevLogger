import { AuthForm } from "../components/AuthForm";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const RegisterPage = () => {
  return (
    <>
      <AuthForm title={"Register"}>
        <Input type="text" placeholder="Name" required />

        <Input type="email" placeholder="Email" required />

        <Input type="text" placeholder="Phone Number" required />

        <Input type="text" placeholder="Username" required />

        <div className="flex gap-1 sm:gap-2">
          <Input type="password" placeholder="Password" required />

          <Input type="password" placeholder="Confirm Password" required />
        </div>

        <Button type={"submit"}>Register</Button>
      </AuthForm>
    </>
  );
};

export { RegisterPage };
