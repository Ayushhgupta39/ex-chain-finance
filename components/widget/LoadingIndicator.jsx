export const LoadingIndicator = () => {
  return (
    <div className="min-h-screen justify-center items-start flex w-full text-white">
      <div className="border shadow-2xl animate-pulse flex justify-evenly flex-col items-center w-96 border-gray-600 rounded-xl m-4">
        <div class="h-2 rounded-full bg-gray-500 w-[90%] p-2 mt-2.5"></div>
        <div class="h-2 rounded-full bg-gray-500 w-[90%] p-2 m-2.5"></div>
        <div class="h-2 rounded-full bg-gray-500 p-2 w-[90%]"></div>
        <div className="rounded-xl bg-gray-500 h-20 w-[90%] m-2 p-2"></div>
        <div className="rounded-xl bg-gray-500 h-20 w-[90%] m-2 p-2"></div>
        <div className="rounded-xl bg-gray-500 h-20 w-[90%] m-2 p-2"></div>
        <div className="flex w-[90%] gap-2 mb-2">
          <div className="rounded-xl bg-gray-500 h-16 w-3/4 p-2"></div>
          <div className="rounded-xl bg-gray-500 h-16 w-1/4 p-2"></div>
        </div>
      </div>
    </div>
  );
};
