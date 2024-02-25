/* eslint-disable react/prop-types */
const Hading = (props) => {
  const {
    classname = "text-xl capitalize text-neutral-100",

    children,
  } = props;
  return <h1 className={classname}>{children}</h1>;
};

export default Hading;
