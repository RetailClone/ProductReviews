import React from "react";
import Circle from './Circle.jsx'

const CircleProgress = (props) => {
  return (
    <div className="header-circular-bar">

      <div className="circle-inner">
          <Circle
          className="radial-bar"
          progress={100}
          color="#3c71d0"/>
      </div>

      <div className="circular-would-recommend">
        94% would recommend
      </div>
      <div className="circular-recommended">
        170 recommendations
      </div>
    </div>
  );
};

export default CircleProgress;
