/* eslint-disable react/prop-types */
const MainLayout = (props) => {
  const {
    children,
    classname = "xl:w-4/5 mx-auto xl:bg-[#0f0f0f] xl:border-x xl:border-[rgba(255,255,255,.08)]",
  } = props;
  return <div className={classname}>{children}</div>;
};

export default MainLayout;
