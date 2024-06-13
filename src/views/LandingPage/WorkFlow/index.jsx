import React from "react";
import Process1 from "../../../assets/images/process1.png";
import Process2 from "../../../assets/images/process2.png";
import Process3 from "../../../assets/images/process3.png";

const WorkFlow = () => {
  return (
    <>
      <div className="w-full bg-blue-100 flex flex-col justify-center items-center p-10">
        <p className="font-bold text-[#1F6CAB] text-lg mb-4">How we work</p>
        <div className="w-full flex flex-wrap justify-center gap-1">
          <img className="object-cover" src={Process1} />
          <img className="object-cover" src={Process2} />
          <img className="object-cover" src={Process3} />
        </div>
      </div>
    </>
  );
};

export default WorkFlow;
