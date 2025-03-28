import { Link, NavLink } from "react-router";

const AuthNav = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  const activeState = ({ isActive }) => {
    return isActive ? "underline text-black" : "";
  };

  return (
    <nav className="bg-black/10 py-5">
      <ul className="flex gap-3 justify-center">
        {links.map((link, i) => (
          <li key={i} className="font-semibold text-black/70">
            <NavLink className={activeState} to={link.path}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { AuthNav };
