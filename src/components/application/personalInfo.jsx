import React from "react";
import personalImg from "../../assets/personalInfo.png";
import PersonalInfo from "../PersonalInfo";
export default function StepTwo({ changeStepTwo }) {
  return (
    <div className="application">
      <div className="leftPart">
        <div className="indecators">
          <div className="buttons">1</div>
          <div className="btn-1">2</div>
          <div className="buttons" onClick={changeStepTwo}>
            3
          </div>
          <div className="buttons">4</div>
        </div>
        <div className="imgIndicators">
          <p>Personal Information</p>
          <img src={personalImg} />
        </div>
      </div>
      <div className="data">
        <PersonalInfo />
      </div>
    </div>
  );
}
