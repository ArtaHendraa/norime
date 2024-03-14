/* eslint-disable react/prop-types */
import Links from "./Links";
import Logo from "./Logo/Logo";

const LogoAndLink = (props) => {
  const { src, linksData, classname } = props;
  return (
    <div className="flex items-center gap-10">
      <Logo src={src} />
      <Links linksData={linksData} classname={classname} />
    </div>
  );
};

export default LogoAndLink;
