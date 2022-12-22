import React from "react";
import { ButtonPrimary, FormWrapper, InputBox } from "./styles";
import {ReactComponent as SearchIcon} from "./../../core/assets/icons/search.svg";
import {ReactComponent as LocationIcon} from "./../../core/assets/icons/location.svg";
import {ReactComponent as CallIcon} from "./../../core/assets/icons/call.svg";

const Form = () => {
  return (
    <FormWrapper>
      <div className={"form__header"}>Отправьте заявку для оформления заказа</div>
      <div className={"form__text"}>Бесплатно ищем спецтехнику. Вы платите только исполнителю за работу</div>
      <InputBox>
        <SearchIcon/>
        <input type="text" placeholder={"Какой вид спецтехники вам нужен?*"}/>
      </InputBox>
      <InputBox>
        <LocationIcon/>
        <input type="text" placeholder={"В каком городе ведете работы?*"}/>
      </InputBox>
      <InputBox>
        <CallIcon/>
        <input type="text" placeholder={"Как вам можно позвонить?"}/>
      </InputBox>
      <ButtonPrimary>Заказать</ButtonPrimary>
      <div className={"form__bottomText"}>* необязательные к заполнению поля</div>
    </FormWrapper>
  );
};

export default Form;