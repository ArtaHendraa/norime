const Button = (props) => {
  const {
    classname = "px-4 py-2 rounded font-bold",
    onClick,
    disabled,
    children,
  } = props;
  return (
    <button className={classname} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
