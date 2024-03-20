/* eslint-disable react/prop-types */
const NavbarLayout = ({ children }) => {
  return (
    <nav
      className="relative z-50 bg-[rgba(15,15,15,.9)] px-5 md:px-8 xl:px-0 text-white left-0 right-0 backdrop-blur-sm"
      id="nav"
    >
      <div className="flex items-center justify-between mx-auto xl:w-4/5">
        {children}
      </div>
    </nav>
  );
};

export default NavbarLayout;
