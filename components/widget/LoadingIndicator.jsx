
export const LoadingIndicator = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
      }}
      className="min-h-screen text-white"
    >
      
<div role="status" className="max-w-sm animate-pulse">
    <div className="h-2.5bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 rounded-full bg-gray-700 max-w-[500px] mb-2.5"></div>
    <div className="h-2 rounded-full bg-gray-700 mb-2.5"></div>
    <div className="h-2 rounded-full bg-gray-700 max-w-[500px] mb-2.5"></div>
    <div className="h-2 rounded-full bg-gray-700 max-w-[500px] mb-2.5"></div>
    <div className="h-2 rounded-full bg-gray-700 max-w-[500px]"></div>
    <span className="sr-only">Loading...</span>
</div>

    </div>
  );
};
