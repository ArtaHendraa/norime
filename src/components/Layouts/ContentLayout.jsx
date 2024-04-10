/* eslint-disable react/prop-types */

import Hading from "../Elements/Hading/Hading";

const ContentLayout = (props) => {
  const { children, title, className = "grid-cols-3" } = props;
  return (
    <>
      <Hading classname="flex items-center px-4 py-3 text-2xl font-semibold capitalize text-neutral-200">
        <span className="inline-block w-1 h-6 mr-2 rounded-md bg-neutral-200"></span>
        {title}
      </Hading>
      <main className="flex flex-col items-center justify-center px-4">
        <div
          className={`grid gap-5 md:grid-cols-4 xl:grid-cols-6 place-items-center place-content-center ${className}`}
        >
          {children}
        </div>
      </main>
    </>
  );
};

export default ContentLayout;
