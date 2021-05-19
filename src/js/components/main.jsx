import React, { useState } from "react";

import SingIn from "./sign-in";
import Logo from "./logo";
import Navigation from "./navigation";

import Slider from "./slider";
import PageFooter from "./page-footer";
import withSlider from "../hocs/with-slider";
import Services from "./services";
import CreditBlock from "./credit-block";
import CreditCalculatorContext from "../contexts/CreditCalculatorContext";
import BankBranchs from "./bank-branchs";
import ModalSingIn from "./modal-sing-in";

const SliderWrapped = withSlider(Slider);

const Main = () => {
  const [isModal, setIsModal] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <React.Fragment>
      <header className="page-header">
        <Logo />
        <Navigation
          location={`header`}
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
          setIsModal={setIsModal}
        />
        {!isOpenMenu && (
          <SingIn
            setIsModal={setIsModal}
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
          />
        )}
      </header>
      <main className="page-content">
        {isModal && <ModalSingIn setIsModal={setIsModal} />}
        <h1 className="visually-hidden">ЛИГА Банк</h1>
        <SliderWrapped />
        <Services />
        <CreditCalculatorContext>
          <CreditBlock />
        </CreditCalculatorContext>
        <BankBranchs />
      </main>
      <PageFooter />
    </React.Fragment>
  );
};

export default Main;
