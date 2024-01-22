import Hading from "../Elements/Hading-title/hading";

const ContentLayout = (props) => {
  const { title, children } = props;
  return (
    <main className="flex flex-col justify-center items-center px-4">
      <Hading title={title} />
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 place-items-center place-content-center gap-5">
        {children}
      </div>
    </main>
  );
};

export default ContentLayout;
