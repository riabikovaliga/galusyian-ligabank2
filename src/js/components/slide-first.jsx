import React from "react";

const SlideFirst = () => {
  return (
    <div className="slider__content slider__content--first">
      <p className="slider__title slider__title--first ">Лига Банк</p>
      <p className="slider__text slider__text--first ">
        Кредиты на любой случай
      </p>
      <a
        className="slider__button slider__button--first button"
        href="#calculate-credit"
        onClick={(evt) => {
          evt.preventDefault();
          document.querySelector(".credit-block").scrollIntoView();
        }}
      >
        Рассчитать кредит
      </a>
    </div>
  );
};

export default SlideFirst;
