import CustomIcon from "../Elements/CustomIcon/Icon";
import NavbarLayout from "../Layouts/NavbarLayout";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import Logo from "../Elements/Links & Logo/Logo/Logo";

const Navbar = () => {
  const linksData = [
    {
      url: "/",
      name: "home",
      icon: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    },
    {
      url: "/series",
      name: "series",
      icon: "M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z",
    },
    {
      url: "/movie",
      name: "movie",
      icon: "m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z",
    },
    {
      url: "/popular",
      name: "popular",
      icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
    },
    {
      url: "/bookmark",
      name: "bookmark",
      icon: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z",
    },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <NavbarLayout>
        <a href="/search" className="inline-block xl:hidden">
          <CustomIcon
            classname="w-6 h-6 md:h-7 md:w-7"
            icon="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </a>

        <Logo src="/logo.webp" />
        <div className="flex items-center gap-x-5">
          <a href="" className="hidden xl:inline-block">
            <CustomIcon
              classname="w-6 h-6 md:h-7 md:w-7"
              icon="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </a>

          <CustomIcon
            classname="inline-block cursor-pointer w-7 h-7 md:h-8 md:w-8"
            icon={`${
              isMenuOpen
                ? "M6 18 18 6M6 6l12 12" //close menu icon
                : "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" //normal menu icon
            }`}
            onclick={handleMenuToggle}
          />
        </div>
      </NavbarLayout>
      {isMenuOpen && (
        <DropdownMenu linksData={linksData} closeMenu={closeMenu} />
      )}
    </>
  );
};

export default Navbar;
