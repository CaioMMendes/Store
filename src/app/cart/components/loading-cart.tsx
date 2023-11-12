const LoadingCart = () => {
  return (
    <div
      className="flex h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-zinc-100 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    ></div>
  );
};

export default LoadingCart;
