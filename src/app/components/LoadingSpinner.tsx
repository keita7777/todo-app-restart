import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center my-10" aria-label="読み込み中">
      <div className="animate-spin h-16 w-16 border-4 border-blue-500 rounded-full border-t-transparent"></div>
    </div>
  );
};

export default LoadingSpinner;
