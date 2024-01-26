/* eslint-disable react/prop-types */

const DropdownMenu = ({ linksData, closeMenu }) => {
  return (
    <div className="bg-white fixed z-50 w-full">
      {linksData.map((link) => (
        <a
          href={link.url}
          key={link.url}
          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          onClick={closeMenu}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default DropdownMenu;
