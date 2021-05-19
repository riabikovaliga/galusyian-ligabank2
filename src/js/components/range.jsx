import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import PropTypes from "prop-types";

const Range = (props) => {
  const { parameters, currentValue, onChangeRange } = props;
  const { min, max, step } = parameters;
  return (
    <div className="calculator__range">
      <Slider
        step={step}
        min={min}
        max={max}
        value={currentValue}
        onChange={onChangeRange}
        railStyle={{ backgroundColor: "#C1C2CA", height: `1px` }}
        trackStyle={{ backgroundColor: "#2C36F2", height: `1px` }}
        handleStyle={{
          marginTop: -6,
          border: `none`,
          height: 14,
          width: 14,
          backgroundColor: "#2C36F2",
        }}
      />
    </div>
  );
};

Range.propTypes = {
  onChangeRange: PropTypes.func.isRequired,
  currentValue: PropTypes.number.isRequired,
  parameters: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
  }).isRequired,
};

export default Range;
