const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p className="pt-3 text-xs text-center text-neutral-400">
      &copy;{currentYear} Norime | ALL Rights Reserved
    </p>
  );
};

export default Copyright;
