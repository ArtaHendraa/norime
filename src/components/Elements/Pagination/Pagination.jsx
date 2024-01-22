import Button from "../Button/Button";
import CustomIcon from "../CustomIcon/Icon";

const Pagination = (props) => {
  const {
    calculateDisplayedPages,
    currentPage,
    totalPages,
    loadPrevPage,
    loadNextPage,
    loadPage,
  } = props;
  return (
    <>
      <div className="xl:px-5 mt-7">
        <span className="block border border-[rgba(255,255,255,.08)]"></span>
      </div>

      <div className="my-3">
        <div className="text-center">
          <h1>
            Page {currentPage} of {totalPages}
          </h1>
        </div>

        <div className=" hidden md:block text-neutral-200 mt-3">
          <div className="flex flex-wrap gap-2 items-center justify-center mx-auto">
            <Button onClick={loadPrevPage} disabled={currentPage === 1}>
              <CustomIcon
                classname="w-4 h-4"
                stroke="4"
                icon="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </Button>
            {calculateDisplayedPages().map((page) => (
              <Button
                key={page}
                classname={`rounded-lg px-4 py-1 hover:bg-[#ece48a] hover:text-black duration-200 ${
                  page === currentPage
                    ? "bg-[#ece48a] text-black font-semibold"
                    : ""
                }`}
                onClick={() => loadPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              onClick={loadNextPage}
              disabled={currentPage === totalPages}
            >
              <CustomIcon
                classname="w-4 h-4"
                stroke="4"
                icon="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-3 px-5 md:hidden mt-3">
          <Button
            classname="w-full h-8 rounded font-bold border flex items-center justify-center"
            onClick={loadPrevPage}
            disabled={currentPage === 1}
          >
            <CustomIcon
              classname="w-4 h-4"
              stroke="4"
              icon="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </Button>

          <Button
            classname="w-full h-8 rounded font-bold border flex items-center justify-center"
            onClick={loadNextPage}
            disabled={currentPage === totalPages}
          >
            <CustomIcon
              classname="w-4 h-4"
              stroke="4"
              icon="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
