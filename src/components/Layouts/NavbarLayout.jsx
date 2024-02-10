/* eslint-disable react/prop-types */
const NavbarLayout = ({ children }) => {
  return (
    <nav className="relative w-full h-16 md:h-[4.3rem] bg-transparent z-50">
      <div
        className="bg-[rgba(15,15,15,.9)] px-5 md:px-8 xl:px-0 text-white fixed left-0 right-0 backdrop-blur-sm"
        id="nav"
      >
        <div className="flex justify-between items-center xl:w-4/5 mx-auto">
          {children}
        </div>
      </div>
    </nav>
  );
};

export default NavbarLayout;
