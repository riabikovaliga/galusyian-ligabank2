import React, { useEffect } from "react";
import PropTypes from "prop-types";

const CheckboxCar = (props) => {
  const {
    isCarInsurance,
    isLifeInsurance,
    setIsCarInsurance,
    setIsLifeInsurance,
  } = props;

  useEffect(() => {
    setIsCarInsurance(true);
    setIsLifeInsurance(true);
  }, [setIsCarInsurance, setIsLifeInsurance]);

  return (
    <div>
      <div>
        <input
          className="visually-hidden  calculator__checkbox"
          type="checkbox"
          id="car-insurance"
          checked={isCarInsurance}
          onChange={(evt) => setIsCarInsurance(evt.target.checked)}
        />
        <label htmlFor="car-insurance">Оформить КАСКО в нашем банке</label>
      </div>
      <div>
        <input
          className="visually-hidden  calculator__checkbox"
          type="checkbox"
          id="life-insurance"
          checked={isLifeInsurance}
          onChange={(evt) => setIsLifeInsurance(evt.target.checked)}
        />
        <label htmlFor="life-insurance">
          Оформить Страхование жизни в нашем банке
        </label>
      </div>
    </div>
  );
};

CheckboxCar.propTypes = {
  isCarInsurance: PropTypes.bool.isRequired,
  isLifeInsurance: PropTypes.bool.isRequired,
  setIsCarInsurance: PropTypes.func.isRequired,
  setIsLifeInsurance: PropTypes.func.isRequired,
};
export default CheckboxCar;
