import React from "react";

import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => (
  <div>
    <p className="f4 tc ma4 mt3">
      {`This magic application will detect the faces in your pictures.`} <br />
      {`Give it a try!`}
    </p>
    <div className="center">
      <div className="form center ma2">
        <input className="f4 pa2 w-75 center br4 br--left" type="text" onChange={onInputChange}/>
        <button className="w-25 grow f5 br4 br--right link ph3 pv2 dib white bg-orange pointer" onClick={onButtonSubmit}>
          Detect
        </button>
      </div>
    </div>
  </div>
);

export default ImageLinkForm;
