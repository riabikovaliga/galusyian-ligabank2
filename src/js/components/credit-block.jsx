import React, { useState, Suspense } from "react";
import PopupWithGratitude from "./popup-with-gratitude";
import Request from "./request";
import Offer from "./offer";
import SelectCreditType from "./select-credit-type";
import { disablePageScrolling } from "../utils";

import { useCreditCalculatorContext } from "../contexts/CreditCalculatorContext";

const CreditParameters = React.lazy(() => import("./credit-parameters"));

const CreditBlock = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [requestNumber, setRequestNumber] = useState({ mortgage: 1, car: 1 });

  const {
    typeCredit,
    setTypeCredit,
    isOfferRequestFormOpen,
    isOfferOpen,
    setIsOfferOpen,
  } = useCreditCalculatorContext();

  const onSubmit = (evt) => {
    evt.preventDefault();
    setRequestNumber({
      ...requestNumber,
      [typeCredit]: requestNumber[typeCredit] + 1,
    });
    setTypeCredit(null);
    setIsPopup(true);
    disablePageScrolling();
    setIsOfferOpen(false);
  };

  return (
    <section className="page-content__credit-block credit-block">
      <h2>Кредитный калькулятор</h2>
      <form className="credit-block__calculator calculator" onSubmit={onSubmit}>
        <div className="calculator__wrapper">
          <fieldset className="calculator__step calculator__step--1">
            <legend>Шаг 1. Цель кредита</legend>
            <SelectCreditType />
          </fieldset>
          {typeCredit && (
            <Suspense fallback={<div>Загрузка...</div>}>
              <CreditParameters />
            </Suspense>
          )}
        </div>
        {isOfferOpen ? <Offer /> : ``}
        {isOfferRequestFormOpen && <Request requestNumber={requestNumber} />}
      </form>
      {isPopup && <PopupWithGratitude setIsPopup={setIsPopup} />}
    </section>
  );
};

export default CreditBlock;
