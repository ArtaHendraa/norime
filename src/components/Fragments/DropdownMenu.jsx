/* eslint-disable react/prop-types */

const DropdownMenu = ({ linksData, closeMenu }) => {
  return (
    <div className="fixed z-50 w-full bg-[rgba(15,15,15,.9)] text-white border-b border-black backdrop-blur-sm">
      {linksData.map((link) => (
        <a
          href={link.url}
          key={link.url}
          className="block px-4 py-2"
          onClick={closeMenu}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default DropdownMenu;
