/* eslint-disable react/prop-types */
const Button = (props) => {
  const {
    classname = "px-4 py-2 font-bold rounded",
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
