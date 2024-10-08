
const ErrorPage = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <img src="/error404.svg" className="h-[45%] lg:h-1/2 w-full" alt="eror404" />
      <h5 className="text-center">The page you're looking for doesn't exist.</h5>
    </div>
  );
};

export default ErrorPage;
