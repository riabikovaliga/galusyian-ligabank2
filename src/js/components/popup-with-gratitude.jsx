import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { enablePageScrolling } from "../utils";

const PopupWithGratitude = (props) => {
  const { setIsPopup } = props;

  useEffect(() => {
    document.addEventListener("click", onOverlayClick);
    window.addEventListener("keydown", onEcsDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClose = () => {
    enablePageScrolling();
    setIsPopup(false);
    document.removeEventListener("click", onOverlayClick);
    document.removeEventListener("keydown", onEcsDown);
  };

  const onOverlayClick = (evt) => {
    if (
      !evt.target.closest(".popup-with-gratitude") &&
      !evt.target.closest(".popup-with-gratitude__button-close")
    ) {
      onClose();
    }
  };

  const onEcsDown = (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      onClose();
    }
  };

  return (
    <div className="credit-block__popup-with-gratitude popup-with-gratitude">
      <button
        type="button"
        className="popup-with-gratitude__button-close button-close"
        aria-label="закрыть попап"
        onClick={onClose}
      ></button>
      <h3>Спасибо за обращение в наш банк.</h3>
      <p>Наш менеджер скоро свяжется с вами по указанному номеру телефона.</p>
    </div>
  );
};

PopupWithGratitude.propTypes = {
  setIsPopup: PropTypes.func.isRequired,
};

export default PopupWithGratitude;
