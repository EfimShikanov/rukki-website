import { ICompanyCardProps, IInstructionCardProps } from "../types/cards.types";
import FskLight from "./../assets/images/fsk-light.png";
import Pik from "./../assets/images/pik.png";
import Lsr from "./../assets/images/lsr.png";
import Asterus from "./../assets/images/asterus.png";
import FskDark from "./../assets/images/fsk-dark.png";

export const CardsData: ICompanyCardProps[] = [
  {
    header: "47 727 ₽",
    text: "Сэкономили группе компаний ФСК при пересчете на ФОТ",
    image: FskLight,
    textColor: "#ffffff",
    headerColor: "#ffffff",
    background: "#17161D",
  },
  {
    header: "727 ₽",
    text: "Сэкономили группе компаний ФСК при пересчете на ФОТ",
    image: Pik,
    textColor: "#17161D",
    headerColor: "#FC4C02",
    background: "#F8F9FA",
  },
  {
    header: "3000+",
    text: "Сэкономили группе компаний ФСК при пересчете на ФОТ",
    image: Lsr,
    textColor: "#17161D",
    headerColor: "#BE3141",
    background: "#CED9E2",
  },
  {
    header: "В 2 раза",
    text: "Сэкономили группе компаний ФСК при пересчете на ФОТ",
    image: Asterus,
    textColor: "#ffffff",
    headerColor: "#ffffff",
    background: "#5B6770",
  },
  {
    header: "45 минут",
    text: "Сэкономили группе компаний ФСК при пересчете на ФОТ",
    image: FskDark,
    textColor: "#17161D",
    headerColor: "#17161D",
    background: "#F8F9FA",
  },
];

export const InstructionCardsData: IInstructionCardProps[] = [
  {
    header: "Вы размещаете заявку на аренду спецтехники",
    text: "Все виды спецтехники, простая форма оформления заказа, прозрачные и выгодные тарифы.",
  },
  {
    header: "Выбираете лучшее предложение",
    text: "Выбираете подходящее предложение по цене и характеристикам техники.",
  },
  {
    header: "Спецтехника выезжает по заказу на объект",
    text: "Гарантии выезда и работы техники в срок. Раз в неделю закрывающие документы.",
  },
];
