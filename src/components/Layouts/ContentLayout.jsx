/* eslint-disable react/prop-types */

const ContentLayout = (props) => {
  const { children, title, titleStyle = "block" } = props;
  return (
    <>
      <div className="flex items-center px-4 py-2 font-semibold text-center uppercase font-Quicksand">
        <span
          className={`bg-white w-full h-[1px] ${titleStyle} rounded-md`}
        ></span>
        <h1 className="px-2 text-xl">{title}</h1>
        <span
          className={`bg-white w-full h-[1px] ${titleStyle} rounded-md`}
        ></span>
      </div>
      <main className="flex flex-col items-center justify-center px-4">
        <div className="grid grid-cols-3 gap-5 md:grid-cols-4 xl:grid-cols-6 place-items-center place-content-center">
          {children}
        </div>
      </main>
    </>
  );
};

export default ContentLayout;
