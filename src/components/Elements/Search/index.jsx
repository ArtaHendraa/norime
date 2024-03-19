/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import Input from "./Input";

const SearchBar = (props) => {
  const { type, placeholder, classname, onClick } = props;
  return (
    <div className="relative flex items-center px-3 py-3">
      <Input type={type} placeholder={placeholder} classname={classname} />
      <Button
        classname="right-0 h-10 px-5 bg-[#ece48b] top-1/2 rounded-r-md"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="w-5 h-5 text-[#0a0909]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </Button>
    </div>
  );
};

export default SearchBar;
