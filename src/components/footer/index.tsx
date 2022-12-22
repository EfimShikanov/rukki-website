import React from "react";
import { FooterWrapper } from "./styles";
import LogoLight from "./../../core/assets/images/logo-light.png";
import GooglePlay from "./../../core/assets/images/google-play.png";
import AppStore from "./../../core/assets/images/app-store.png";
import GaskarLogo from "./../../core/assets/images/gaskar-group.png";
import AmethystLogo from "./../../core/assets/images/amethyst-group.png";
import { ButtonSecondary } from "../navbar/styles";
import { ReactComponent as VkIcon } from "./../../core/assets/icons/vk.svg";
import { ReactComponent as TgIcon } from "./../../core/assets/icons/telegram.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className={"footer__content"}>
        <div className={"footer__row"}>
          <div className={"footer__group"}>
            <img src={LogoLight} alt="logo" />
            <div className={"links"}>
              <VkIcon />
              <TgIcon />
            </div>
          </div>
          <div className={"footer__group"}>
            <div>Владельцам техники</div>
            <div>Крупному бизнесу</div>
            <div>О компании</div>
          </div>
          <div className={"footer__group"}>
            <div>Контакты</div>
            <div>Оплата заказа</div>
            <div>Документация</div>
          </div>
          <div className={"footer__group"}>
            <div className={"phone"}>+7 499 226 09 04</div>
            <ButtonSecondary>Войти</ButtonSecondary>
          </div>
        </div>
        <div className={"footer__row"}>
          <div className={"footer__group"}>
            <div>
              ООО «Рукки».
              <br />
              Все права защищены. 2022 г.
            </div>
            <div>
              <img src={GaskarLogo} alt="Gaskar" />
              <img src={AmethystLogo} alt="Amethyst" />
            </div>
          </div>
          <div className={"footer__group"}>
            <div>Политика конфиденциальности</div>
            <div>Реферальная программа</div>
            <div>Юридическая помощь</div>
          </div>
          <div className={"app-links"}>
            <img src={GooglePlay} alt="Google play" />
            <img src={AppStore} alt="App store" />
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
