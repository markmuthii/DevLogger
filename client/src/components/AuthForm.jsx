import { Link } from "react-router";

const AuthForm = ({ children, title }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 uppercase">{title}</h1>
      <div className="shadow-2xl border border-gray-200 rounded-lg w-[90%] max-w-[500px] p-10 text-center space-y-8 pt-10">
        <p className="text-gray-500">
          Please enter your {title === "Login" && "login"} details
          {title === "Register" && " to create an account"}.
        </p>
        <form className="flex flex-col gap-3 mb-8">{children}</form>

        <div className="text-gray-500 text-sm">
          {title === "Register" ? (
            <>
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-blue-600 underline cursor-pointer"
              >
                Login
              </Link>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <Link
                to={"/register"}
                className="text-blue-600 underline cursor-pointer"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export { AuthForm };
