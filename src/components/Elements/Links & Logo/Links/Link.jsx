/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import CustomIcon from "../../CustomIcon/Icon";

const Link = (props) => {
  const { linksData, classname, onclick, linkClass } = props;
  return (
    <>
      {linksData.map((link) => (
        <a
          href={link.url}
          key={link.name}
          className={`flex items-center gap-1 group ${linkClass}`}
          onClick={onclick}
        >
          <CustomIcon
            classname={`w-5 h-5 ${classname} transition-colors`}
            icon={link.icon}
          />
          <span className={`${classname} transition-colors`}>{link.name}</span>
        </a>
      ))}
    </>
  );
};

export default Link;
