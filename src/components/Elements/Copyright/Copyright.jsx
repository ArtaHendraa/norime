const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="pt-3 text-xs text-center text-neutral-400">
      <p>&copy;2024 - {currentYear} Norime | Powered by Jikan API</p>
      <p>
        Develeoped by{" "}
        <a
          className="text-[#ece48b] font-semibold"
          href="https://github.com/ArtaHendraa"
        >
          ArtaHendraa
        </a>
      </p>
    </div>
  );
};

export default Copyright;
