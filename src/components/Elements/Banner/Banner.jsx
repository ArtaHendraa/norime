/* eslint-disable react/prop-types */
const Banner = (props) => {
  const { children, classname = "text-xs text-neutral-100" } = props;
  return (
    <span
      className={`capitalize ${classname} md:text-sm inline-block font-semibold px-2 rounded-sm`}
    >
      {children}
    </span>
  );
};

export default Banner;
