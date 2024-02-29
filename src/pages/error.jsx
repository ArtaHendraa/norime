const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-2xl font-bold uppercase min-h-96">
      <h1 className="font-bold error-message">Something went wrong!</h1>
      <a className="bg-[#ece48b] text-black px-3 py-1 rounded-md" href="/">
        Go Home
      </a>
    </div>
  );
};

export default ErrorPage;
