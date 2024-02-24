/* eslint-disable react/prop-types */
const Banner = (props) => {
  const { children, classname = "text-xs" } = props;
  return (
    <span
      className={`capitalize ${classname} md:text-sm inline-block text-neutral-100 font-semibold px-2 rounded-sm`}
    >
      {children}
    </span>
  );
};

export default Banner;
