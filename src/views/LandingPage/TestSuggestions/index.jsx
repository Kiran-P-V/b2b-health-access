import React from "react";
import TestTubeIcon from "../../../assets/icons/testtube1.png";

const tests = [
  "Liver Function Test",
  "Vitamin D (25-OH)",
  "CBC",
  "Diabetes Screening",
  "COVID-RTPCR",
  "Thyroid profile Total",
  "Thyroid profile Total",
  "CBC",
  "Vitamin D (25-OH)",
  "Diabetes Screening",
  "Liver Function Test",
  "Thyroid profile Total",
  "CBC",
  "Liver Function Test",
  "COVID-RTPCR",
];
const TestSuggestions = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-2 sm:p-10">
      <p className="font-bold text-[#505050] text-lg mb-4">
        Popular Labs in your city
      </p>
      <div className="w-full flex flex-wrap justify-center gap-x-5 md:px-28">
        {tests?.map((item) => (
          <div className="bg-gray-100 flex gap-1 m-1 p-2 rounded-3xl">
            <img src={TestTubeIcon} className="h-6" alt="Test tube icon" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestSuggestions;
