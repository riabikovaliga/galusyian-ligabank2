import React from "react";

const ServicesCredits = () => {
  return (
    <div className="services__content services__content--credits">
      <p className="services__title services__title--credits">
        Лига Банк выдает кредиты под любые цели
      </p>
      <ul className="services__content-list  services__content-list--credits">
        <li>Ипотечный кредит</li>
        <li>Автокредит</li>
        <li>Потребительский кредит</li>
      </ul>
      <p className="services__content-text">
        Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись
        нашим <a href="#credit-calculator">кредитным калькулятором</a>
      </p>
    </div>
  );
};

export default ServicesCredits;
