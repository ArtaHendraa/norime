const MainLayout = ({ children }) => {
  return (
    <div className="xl:w-4/5 mx-auto xl:bg-[#0f0f0f] xl:border xl:border-[rgba(255,255,255,.08)]">
      {children}
    </div>
  );
};

export default MainLayout;
