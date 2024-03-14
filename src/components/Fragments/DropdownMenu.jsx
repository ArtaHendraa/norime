/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Link from "../Elements/Links & Logo/Links/Link";
import Copyright from "../Elements/Copyright/Copyright";

const DropdownMenu = (props) => {
  const { linksData, closeMenu } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`absolute z-10 w-full bg-[rgba(15,15,15,.9)] text-neutral-200 backdrop-blur-sm top-0 pt-[3.75rem] transition ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="py-3 mx-auto xl:w-4/5">
        <Link
          linksData={linksData}
          onclick={closeMenu}
          linkClass="block px-6 py-3 font-semibold capitalize w-full hover:bg-[#ece48b] hover:text-black"
          classname="flex items-center w-4 h-4 text-base"
        />
        <Copyright />
      </div>
    </div>
  );
};

export default DropdownMenu;
