import { Link, NavLink } from "react-router";

const AuthNav = () => {
  const activeState = ({ isActive }) => {
    return isActive && "underline text-black";
  };

  return (
    <nav className="bg-black/10 py-5">
      <ul className="flex gap-3 justify-center">
        <li className="font-semibold text-black/70">
          <NavLink className={activeState} to="/">
            Home
          </NavLink>
        </li>
        <li className="font-semibold text-black/70">
          <NavLink className={activeState} to="/login">
            Login
          </NavLink>
        </li>
        <li className="font-semibold text-black/70">
          <NavLink className={activeState} to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { AuthNav };
