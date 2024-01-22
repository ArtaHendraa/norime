/* eslint-disable react/prop-types */
const Logo = ({ src }) => {
  return (
    <a href="/" className="xl:bg-[rgba(255,255,255,.05)] py-4 xl:px-4">
      <img src={src} className="h-7 md:h-9" alt={src} />
    </a>
  );
};

export default Logo;
