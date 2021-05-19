import React from "react";

import { useCreditCalculatorContext } from "../contexts/CreditCalculatorContext";
import {
  addSpacesAfterThreeCharacters,
  deleteLine,
  getSumInitialFee,
  onFocusInput,
  onBlurInput,
  getDurationUnit,
} from "../utils";
import { MORTGAGE, CAR, CURRENCIES, DURATION_UNITS } from "../const";

import Range from "./range";
import CheckboxMortgage from "./checkbox-mortgage";
import CheckboxCar from "./checkbox-car";

const CreditParameters = () => {
  const {
    parameters: { initialFee, price, duration, type },
    setCurrentPrice,
    setIsValidPrice,
    setSumInitialFee,
    setIsCapital,
    setCurrentDuration,
    currentPrice,
    isValidPrice,
    sumInitialFee,
    setIsLifeInsurance,
    currentDuration,
    setIsCarInsurance,
    setRateInitialFee,
    isCarInsurance,
    isLifeInsurance,
    rateInitialFee,
    isCapital,
  } = useCreditCalculatorContext();

  const onInputPrice = (evt) => {
    const numPrice = Number(deleteLine(evt.target.value, CURRENCIES));
    if (numPrice || evt.target.value === "") {
      setCurrentPrice(addSpacesAfterThreeCharacters(String(numPrice)));
      if (numPrice < price.min || numPrice > price.max) {
        setIsValidPrice(false);
      }
      return;
    }
    return;
  };

  const onInputSumInitialFee = (evt) => {
    const numSumInitialFee = Number(deleteLine(evt.target.value, CURRENCIES));
    if (numSumInitialFee || evt.target.value === "") {
      setSumInitialFee(addSpacesAfterThreeCharacters(String(numSumInitialFee)));
      return;
    }
    return;
  };

  const onInputDuration = (evt) => {
    const numDuration = Number(deleteLine(evt.target.value, DURATION_UNITS));
    if (numDuration || evt.target.value === "") {
      setCurrentDuration(String(numDuration));
      return;
    }
    return;
  };

  const onIncrementPrice = () => {
    const result = Number(deleteLine(currentPrice, CURRENCIES)) + price.step;
    setCurrentPrice(addSpacesAfterThreeCharacters(result) + CURRENCIES[0]);
    return;
  };

  const onDecrementPrice = () => {
    const result = Number(deleteLine(currentPrice, CURRENCIES)) - price.step;
    setCurrentPrice(addSpacesAfterThreeCharacters(result) + CURRENCIES[0]);
    return;
  };

  const onCheckInitialFee = (value) => {
    const minSumInitialFee = getSumInitialFee(currentPrice, initialFee.min);
    const maxSumInitialFee = getSumInitialFee(currentPrice, initialFee.max);
    const numSumInitialFee = Number(deleteLine(value, CURRENCIES));

    if (numSumInitialFee < minSumInitialFee) {
      setRateInitialFee(initialFee.min);
      return String(minSumInitialFee);
    }

    if (numSumInitialFee > maxSumInitialFee) {
      setRateInitialFee(initialFee.max);
      return String(maxSumInitialFee);
    }

    setRateInitialFee(
      (numSumInitialFee / Number(deleteLine(currentPrice, CURRENCIES))) * 100
    );
    return value;
  };

  const onCheckDuration = (value) => {
    const numDuration = Number(deleteLine(value, DURATION_UNITS));

    if (numDuration < duration.min) {
      return String(duration.min);
    }

    if (numDuration > duration.max) {
      return String(duration.max);
    }

    return value;
  };

  return (
    <React.Fragment>
      <fieldset className="calculator__step calculator__step--2">
        <legend>Шаг 2. Введите параметры кредита</legend>
        <div className="calculator__input-wrapper">
          <label htmlFor="price">
            Стоимость {type === MORTGAGE.type ? `недвижимости` : `автомобиля`}
          </label>
          <div
            className={`calculator__input  input calculator__input--price ${
              !isValidPrice ? `calculator__input--price-error` : ``
            }`}
          >
            <button
              className="calculator__price-button calculator__price-button--decrement"
              type="button"
              onClick={onDecrementPrice}
            />
            <input
              className="input input--price"
              type="text"
              id="price"
              value={currentPrice}
              onFocus={(evt) => setCurrentPrice(onFocusInput(evt, CURRENCIES))}
              onBlur={() =>
                setCurrentPrice(
                  onBlurInput(currentPrice, CURRENCIES, CURRENCIES[0])
                )
              }
              onInput={onInputPrice}
            />
            <button
              className="calculator__price-button calculator__price-button--increment"
              type="button"
              onClick={onIncrementPrice}
            />
            {!isValidPrice && (
              <span className="calculator__price-error-msg">
                Некорректное значение
              </span>
            )}
          </div>
          <span className="calculator__label calculator__label--price">
            От {price.min} до {price.max} {CURRENCIES[0]}
          </span>
        </div>
        <div className="calculator__input-wrapper">
          <label htmlFor="initial-fee">Первоначальный взнос</label>
          <input
            className="calculator__input calculator__input--initial-fee input"
            type="text"
            id="initial-fee"
            value={sumInitialFee}
            onFocus={(evt) => setSumInitialFee(onFocusInput(evt, CURRENCIES))}
            onBlur={() =>
              setSumInitialFee(
                onBlurInput(
                  onCheckInitialFee(sumInitialFee),
                  CURRENCIES,
                  CURRENCIES[0]
                )
              )
            }
            onInput={onInputSumInitialFee}
          />
          <Range
            parameters={initialFee}
            currentValue={rateInitialFee}
            onChangeRange={(value) => setRateInitialFee(value)}
          />
          <span className="calculator__label">{initialFee.min + `%`}</span>
        </div>
        <div className="calculator__input-wrapper ">
          <label htmlFor="duration">Срок кредитования</label>
          <input
            className="calculator__input calculator__input--duration input"
            type="text"
            id="duration"
            value={currentDuration}
            onFocus={(evt) =>
              setCurrentDuration(onFocusInput(evt, DURATION_UNITS))
            }
            onBlur={() =>
              setCurrentDuration(
                onBlurInput(
                  onCheckDuration(currentDuration),
                  DURATION_UNITS,
                  getDurationUnit(onCheckDuration(currentDuration))
                )
              )
            }
            onInput={onInputDuration}
          />
          <Range
            parameters={duration}
            currentValue={Number(deleteLine(currentDuration, DURATION_UNITS))}
            onChangeRange={(value) =>
              setCurrentDuration(value + getDurationUnit(value))
            }
          />
          <div className="calculator__range-label">
            <span className="calculator__label">
              {duration.min + getDurationUnit(duration.min)}
            </span>
            <span className="calculator__label">
              {duration.max + getDurationUnit(duration.max)}
            </span>
          </div>
        </div>
        {type === MORTGAGE.type ? (
          <CheckboxMortgage isCapital={isCapital} setIsCapital={setIsCapital} />
        ) : (
          ``
        )}
        {type === CAR.type ? (
          <CheckboxCar
            isCarInsurance={isCarInsurance}
            isLifeInsurance={isLifeInsurance}
            setIsCarInsurance={setIsCarInsurance}
            setIsLifeInsurance={setIsLifeInsurance}
          />
        ) : (
          ``
        )}
      </fieldset>
    </React.Fragment>
  );
};

export default CreditParameters;
