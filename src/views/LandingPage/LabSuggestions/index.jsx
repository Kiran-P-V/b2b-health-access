import React from "react";
import logos from "./logo";

const LabSuggestions = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-5  sm:p-10  border-b-4">
      <p className="font-bold text-[#505050] text-lg mb-4">
        Popular Labs in your city
      </p>
      <div className="w-full flex flex-wrap justify-center gap-x-5 md:px-28">
        {logos.map((item, index) => (
          <img
            key={index}
            className="w-16 h-w-16 object-contain"
            src={item}
            alt={`Logo ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LabSuggestions;
