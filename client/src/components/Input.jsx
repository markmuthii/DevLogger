const Input = (props) => {
  return (
    <input
      className={`${props.className} border border-gray-300 p-2 rounded`}
      {...props} // Spread operator to pass all props to the input element
    />
  );
};

export { Input };
