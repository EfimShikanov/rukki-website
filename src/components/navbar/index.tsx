import React from "react";
import { ButtonSecondary, NavbarWrapper } from "./styles";
import logo from "./../../core/assets/images/logo.png";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <div className={"navbar__content"}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={"links"}>
          <div>Наша техника</div>
          <div>Партнеры</div>
          <div>Приложение</div>
        </div>
        <div className={"links"}>
          <a href="tel:+74992260904">+7 499 226 09 04</a>
          <ButtonSecondary>Войти</ButtonSecondary>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
