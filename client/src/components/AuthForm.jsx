import { Link } from "react-router";

const AuthForm = ({ children, title }) => {
  return (
    <div className="shadow-2xl border border-gray-300 rounded-lg w-[90%] max-w-[500px] p-6 text-center space-y-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <form className="flex flex-col gap-3 mb-8">{children}</form>

      <div className="block text-gray-500 text-sm">
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
  );
};

export { AuthForm };
