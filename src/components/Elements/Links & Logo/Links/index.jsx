/* eslint-disable react/prop-types */

import Link from "./Link";

const Links = (props) => {
  const { linksData, classname } = props;
  return (
    <div className="hidden xl:flex xl:items-center xl:gap-10 capitalize ">
      <Link linksData={linksData} classname={classname} />
    </div>
  );
};

export default Links;
