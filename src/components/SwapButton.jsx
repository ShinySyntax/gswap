import React from "react";

const SwapButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[#146f68] text-white font-medium py-4 rounded-xl mt-6 text-1xl shadow-lg hover:opacity-90 transition"
    >
      {label}
    </button>
  );
};

export default SwapButton;
