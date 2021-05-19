import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { MORTGAGE, USER_DATA } from "../const";
import { useCreditCalculatorContext } from "../contexts/CreditCalculatorContext";

const Request = (props) => {
  const { requestNumber } = props;
  const {
    parameters: { type },
    currentPrice,
    sumInitialFee,
    currentDuration,
  } = useCreditCalculatorContext();

  const [userData, setUserData] = useState(USER_DATA);

  useEffect(() => {
    const savedUserData = localStorage.getItem(`userData`);
    const newUserData = savedUserData ? JSON.parse(savedUserData) : userData;
    setUserData(newUserData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem(`userData`, JSON.stringify(userData));
  }, [userData]);

  const onChangeInput = (evt) => {
    setUserData({ ...userData, [evt.target.name]: evt.target.value });
  };

  return (
    <div className="calculator__request request">
      <h3>Шаг 3. Оформление заявки</h3>
      <table className="request__data">
        <thead className="visually-hidden">
          <tr>
            <th>Параметр</th>
            <th>Значение</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Номер заявки</th>
            <th>{`№ ` + String(requestNumber[type]).padStart(4, "0")}</th>
          </tr>
          <tr>
            <th>Цель кредита</th>
            <th>{type === MORTGAGE.type ? `Ипотека` : `Автокредит`}</th>
          </tr>
          <tr>
            <th>
              Стоимость {type === MORTGAGE.type ? `недвижимости` : `автомобиля`}
            </th>
            <th>{currentPrice}</th>
          </tr>
          <tr>
            <th>Первоначальный взнос</th>
            <th>{sumInitialFee}</th>
          </tr>
          <tr>
            <th>Срок кредитования</th>
            <th>{currentDuration}</th>
          </tr>
        </tbody>
      </table>
      <fieldset className="request__user calculator__step calculator__step--3">
        <label className="visually-hidden" htmlFor="name">
          Фамилия, имя, отчество
        </label>
        <input
          className="request__input input"
          type="text"
          id="name"
          name="name"
          value={userData.name}
          placeholder="ФИО"
          onChange={onChangeInput}
          autoFocus
          required
        />
        <label className="visually-hidden" htmlFor="tel">
          Номер телефона
        </label>
        <input
          className="request__input  input input--tel"
          type="tel"
          id="tel"
          name="tel"
          value={userData.tel}
          placeholder="Телефон"
          onChange={onChangeInput}
          required
        />
        <label className="visually-hidden" htmlFor="email">
          Адрес электронной почты
        </label>
        <input
          className="request__input input input--email"
          type="email"
          id="email"
          name="email"
          value={userData.email}
          placeholder="E-mail"
          onChange={onChangeInput}
          required
        />
        <button className="request__button button" type="submit">
          Отправить
        </button>
      </fieldset>
    </div>
  );
};

Request.propTypes = {
  requestNumber: PropTypes.shape({
    mortgage: PropTypes.number,
    car: PropTypes.number,
  }).isRequired,
};

export default Request;
