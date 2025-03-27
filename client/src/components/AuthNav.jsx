import { Link, NavLink } from "react-router";

const AuthNav = () => {
  return (
    <nav className="bg-black/5 py-5">
      <ul className="flex gap-3 justify-center">
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "bg-amber-300" : "";
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "bg-amber-300" : "";
            }}
            to="/login"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "bg-amber-300" : "";
            }}
            to="/register"
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { AuthNav };
