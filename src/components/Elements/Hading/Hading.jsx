/* eslint-disable react/prop-types */
const Hading = (props) => {
  const {
    classname = "capitalize text-xl text-neutral-100",

    children,
  } = props;
  return <h1 className={classname}>{children}</h1>;
};

export default Hading;
