/* eslint-disable react/prop-types */
const Input = (props) => {
  const { type, placeholder, classname } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`bg-[rgba(255,255,255,.1)] py-2 px-5 ${classname} rounded-md focus:outline-none`}
    />
  );
};

export default Input;
