/* eslint-disable react/prop-types */
import Input from "./Input";

const SearchBar = (props) => {
  const { type, placeholder, classname } = props;
  return (
    <div className="xl:flex hidden relative rounded-md">
      <Input type={type} placeholder={placeholder} classname={classname} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="currentColor"
        className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
