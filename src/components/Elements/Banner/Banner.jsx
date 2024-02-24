/* eslint-disable react/prop-types */
const Banner = (props) => {
  const { children, classname } = props;
  return (
    <span
      className={`capitalize ${classname} text-xs xl:text-sm inline-block text-neutral-100 font-semibold px-2 rounded-sm`}
    >
      {children}
    </span>
  );
};

export default Banner;
