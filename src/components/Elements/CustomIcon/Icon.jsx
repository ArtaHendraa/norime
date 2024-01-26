/* eslint-disable react/prop-types */
const CustomIcon = (props) => {
  const { classname, icon, stroke = "1.5", onclick } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={stroke}
      stroke="currentColor"
      className={classname}
      onClick={onclick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </svg>
  );
};

export default CustomIcon;
