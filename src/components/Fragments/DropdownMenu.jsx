/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Link from "../Elements/Links & Logo/Links/Link";

const DropdownMenu = (props) => {
  const { linksData, closeMenu } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`xl:hidden fixed z-40 w-full bg-[rgba(15,15,15,.9)] text-white backdrop-blur-sm top-0 pt-[3.75rem] transition-all duration-300 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="py-3">
        <Link
          linksData={linksData}
          onclick={closeMenu}
          linkClass="block px-6 py-3 font-semibold capitalize w-full hover:bg-[#ece48b] hover:text-black"
          classname="text-xl w-7 h-7"
        />
        <p className="text-xs text-neutral-400 text-center pt-3">
          &copy;{currentYear} Norime | ALL Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default DropdownMenu;
