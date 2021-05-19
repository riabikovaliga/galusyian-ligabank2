import React, { useEffect } from "react";
import PropTypes from "prop-types";

const CheckboxMortgage = (props) => {
  const { isCapital, setIsCapital } = props;

  useEffect(() => {
    setIsCapital(true);
  }, [setIsCapital]);

  return (
    <div>
      <input
        className="visually-hidden calculator__checkbox"
        type="checkbox"
        id="capital"
        checked={isCapital}
        onChange={(evt) => setIsCapital(evt.target.checked)}
      />
      <label htmlFor="capital">Использовать материнский капитал</label>
    </div>
  );
};

CheckboxMortgage.propTypes = {
  isCapital: PropTypes.bool.isRequired,
  setIsCapital: PropTypes.func.isRequired,
};

export default CheckboxMortgage;
