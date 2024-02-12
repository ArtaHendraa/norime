const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p className="text-xs text-neutral-400 text-center pt-3">
      &copy;{currentYear} Norime | ALL Rights Reserved
    </p>
  );
};

export default Copyright;
