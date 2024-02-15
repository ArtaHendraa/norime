/* eslint-disable react/prop-types */

const ContentLayout = (props) => {
  const { children, title, titleStyle = "block" } = props;
  return (
    <>
      <div className="px-4 uppercase font-Quicksand font-semibold py-2 text-center flex items-center">
        <span
          className={`bg-white w-full h-[1px] ${titleStyle} rounded-md`}
        ></span>
        <h1 className="text-xl px-2">{title}</h1>
        <span
          className={`bg-white w-full h-[1px] ${titleStyle} rounded-md`}
        ></span>
      </div>
      <main className="flex flex-col justify-center items-center px-4">
        <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 place-items-center place-content-center gap-5">
          {children}
        </div>
      </main>
    </>
  );
};

export default ContentLayout;
