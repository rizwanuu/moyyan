import React, { useState } from "react";
import Cv from "./uploadCv";
import StepTwo from "./personalInfo";
import StepThree from "./preference";
import StepFour from "./skills";
export default function Application() {
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [stepFour, setStepFour] = useState(false);
  const changeStepOne = () => {
    setStepTwo(true);
    setStepOne(false);
    setStepThree(false);
    setStepFour(false);
  };
  const changeStepTwo = () => {
    setStepOne(false);
    setStepTwo(false);
    setStepThree(true);
    setStepFour(false);
  };
  const changeStepThree = () => {
    setStepOne(false);
    setStepTwo(false);
    setStepThree(false);
    setStepFour(true);
  };
  const changeStepFour = () => {
    setStepOne(true);
    setStepTwo(false);
    setStepThree(false);
    setStepFour(false);
  };
  return (
    <div className="container">
      {stepOne && <Cv changeStepOne={changeStepOne} />}
      {stepTwo && <StepTwo changeStepTwo={changeStepTwo} />}
      {stepThree && <StepThree changeStepThree={changeStepThree} />}
      {stepFour && <StepFour changeStepFour={changeStepFour} />}
    </div>
  );
}
