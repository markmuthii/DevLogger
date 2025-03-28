const Button = ({ children, type }) => {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded cursor-pointer px-4 hover:bg-blue-600 transition duration-300 ease-in-out"
      type={type}
    >
      {children}
    </button>
  );
};

export { Button };
