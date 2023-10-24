import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen bg-gray-900 justify-center items-start flex w-full text-white">
      <div class="flex items-center justify-center min-h-screen p-5 min-w-screen">
        <div class="flex space-x-2 animate-pulse">
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
