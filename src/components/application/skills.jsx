import React from "react";
import Skills from "../Skills";
import skills from "../../assets/skilss.png";
export default function StepFour() {
  return (
    <div className="application">
      <div className="leftPart">
        <div className="indecators">
          <div className="buttons">1</div>
          <div className="buttons">2</div>
          <div className="buttons">3</div>
          <div className="btn-1">4</div>
        </div>
        <div className="imgIndicators">
          <p>Let us know about your skills</p>
          <img alt="img" src={skills} />
        </div>
      </div>
      <div className="data">
        {/* <Preferences /> */}
        <Skills />
      </div>
    </div>
  );
}
