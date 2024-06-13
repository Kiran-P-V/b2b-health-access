import React from "react";
import SliderComponent from "./Slider";
import LabSuggestions from "./LabSuggestions";
import TestSuggestions from "./TestSuggestions";
import WorkFlow from "./WorkFlow";

const LandingPage = () => {
  return (
    <>
      <SliderComponent />
      <LabSuggestions />
      <TestSuggestions />
      <WorkFlow />
    </>
  );
};

export default LandingPage;
