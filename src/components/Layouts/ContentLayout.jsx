/* eslint-disable react/prop-types */

const ContentLayout = (props) => {
  const { children } = props;
  return (
    <main className="flex flex-col justify-center items-center px-4">
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 place-items-center place-content-center gap-5">
        {children}
      </div>
    </main>
  );
};

export default ContentLayout;
