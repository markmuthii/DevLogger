import { Outlet } from "react-router";
import { AuthNav } from "../components/AuthNav";

const AuthLayout = () => {
  return (
    <>
      <AuthNav />

      {/* This is where the contents of the components that have been nested inside the AuthLayout will be output */}
      <Outlet />
    </>
  );
};

export { AuthLayout };
