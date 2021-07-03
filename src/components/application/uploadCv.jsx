import React from "react";
import UploadCv from "../UploadCv";
import cvImg from "../../assets/cv.PNG";
export default function Cv({ changeStepOne, changeStepTwo }) {
  return (
    <div className="application">
      <div className="leftPart">
        <div className="indecators">
          <div className="btn-1">1</div>
          <div className="buttons" onClick={changeStepOne}>
            2
          </div>

          <div className="buttons">3</div>
          <div className="buttons">4</div>
        </div>
        <div className="imgIndicators">
          <p>Upload your CV</p>
          <img src={cvImg} />
        </div>
      </div>
      <div className="data">
        <UploadCv />
      </div>
    </div>
  );
}
