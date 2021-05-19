import React from "react";

const SlideThird = () => {
  return (
    <div className="slider__content slider__content--third">
      <p className="slider__title">Лига Банк</p>
      <p className="slider__text">Всегда рядом</p>
      <a
        className="slider__button slider__button--third button"
        href="#find-a-branch"
        onClick={(evt) => {
          evt.preventDefault();
          document.querySelector(".bank-branchs").scrollIntoView();
        }}
      >
        Найти отделение
      </a>
    </div>
  );
};

export default SlideThird;
