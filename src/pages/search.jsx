import MainLayout from "../components/Layouts/MainLayout";
import SearchBar from "../components/Elements/Search/index";

const SearchPage = () => {
  return (
    <MainLayout>
      <section className="px-4 pt-1">
        <SearchBar
          type="text"
          placeholder="Search..."
          classname="w-full h-10 "
        />
      </section>
    </MainLayout>
  );
};

export default SearchPage;
