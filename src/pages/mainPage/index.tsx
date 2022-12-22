import React from "react";
import Form from "../../components/form";
import { CardsData, InstructionCardsData } from "../../core/utils/cardsData";
import { ReactComponent as CallIcon } from "./../../core/assets/icons/call.svg";
import {ReactComponent as WA} from "./../../core/assets/icons/wa.svg";
import {ReactComponent as TG} from "./../../core/assets/icons/tg-large.svg";
import GooglePlay from "./../../core/assets/images/google-play.png";
import AppStore from "./../../core/assets/images/app-store.png";
import VehiclesImage from "./vehicles.png"
import CompanyCard from "../../components/companyCard";
import {
  CardsWrapper,
  Container, Flex,
  Header,
  Screen,
  Section,
  ShowMoreButton,
  VehiclesWrapper
} from "./styles";
import { ButtonPrimary, InputBox } from "../../components/form/styles";
import VehicleCard from "../../components/vehicleCard";
import Vehicle from "./../../core/assets/images/vehicle.png";
import { IVehicleCardProps } from "../../core/types/cards.types";
import InstructionCard from "../../components/instructionCard";
import List from "../../components/list";
import Dropdown from "../../components/dropdown";

const Vehicles: IVehicleCardProps[] = [
  {
    name: "Сельхозтехника",
    price: 1990,
    image: Vehicle,
  },
  {
    name: "Сельхозтехника",
    price: 1990,
    image: Vehicle,
  },
  {
    name: "Сельхозтехника",
    price: 1990,
    image: Vehicle,
  },
  {
    name: "Сельхозтехника",
    price: 1990,
    image: Vehicle,
  },
  {
    name: "Сельхозтехника",
    price: 1990,
    image: Vehicle,
  },
  {
    name: "Сельхозтехника",
    price: 1990,
    image: Vehicle,
  },
  {
    name: "Сельхозтехника",
    price: 1990,
    image: Vehicle,
  },
  {
    name: "Сельхозтехника",
    price: 1990,
    image: Vehicle,
  },
];

const MainPage = () => {
  const renderCompanyCards = () => {
    return CardsData.map((card, index) => {
      return (
        <CompanyCard
          key={index}
          header={card.header}
          text={card.text}
          image={card.image}
          background={card.background}
          headerColor={card.headerColor}
          textColor={card.textColor}
        />
      );
    });
  };

  const renderVehiclesCards = () => {
    return Vehicles.map((card, index) => {
      return (
        <VehicleCard
          key={index}
          name={card.name}
          price={card.price}
          image={card.image}
        />
      );
    });
  };

  const renderInstructionCards = () => {
    return InstructionCardsData.map((card, index) => {
      return (
        <InstructionCard key={index} header={card.header} text={card.text} />
      );
    });
  };

  return (
    <>
      <Screen style={{ background: "#F8F9FA" }}>
        <Container>
          <div className="content">
            <Form />
            <div className={"background"}>
              <div className="header">
                Rukki Pro – найдем спецтехнику за 1 час
              </div>
            </div>
          </div>
        </Container>
      </Screen>
      <Screen style={{ background: "#ffffff", paddingTop: "90px" }}>
        <Container>
          <Header>Компании, которые нам доверяют</Header>
          <CardsWrapper>
            {renderCompanyCards()}
            <div className={"form"}>
              <Header style={{ maxWidth: "570px" }}>
                Присоединяйтесь к команде партнеров Rukki Pro
              </Header>
              <div className={"buttons"}>
                <InputBox style={{ width: "270px" }}>
                  <CallIcon />
                  <input type="text" placeholder={"Введите телефон"} />
                </InputBox>
                <ButtonPrimary style={{ width: "270px", marginTop: 0 }}>
                  Оставить заявку
                </ButtonPrimary>
              </div>
            </div>
          </CardsWrapper>
        </Container>
      </Screen>
      <Screen
        style={{
          background: "#ffffff",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <Container>
          <Header>
            Каталог спецтехники насчитывает более 9000 единиц, доступных в
            течение 1 часа
          </Header>
          <VehiclesWrapper>{renderVehiclesCards()}</VehiclesWrapper>
          <ShowMoreButton>Показать еще</ShowMoreButton>
        </Container>
      </Screen>
      <Screen style={{ paddingTop: "100px", background: "#F8F9FA" }}>
        <Container>
          <Header>Как арендовать спецтехнику в сервисе Rukki Pro</Header>
          <CardsWrapper>{renderInstructionCards()}</CardsWrapper>
        </Container>
      </Screen>
      <Screen
        style={{
          paddingTop: "80px",
          background: "#F8F9FA",
          paddingBottom: "100px",
        }}
      >
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <Section>
            <Header>Скачайте и сразу закажите спецтехнику в один клик</Header>
            <div className="images">
              <img src={GooglePlay} alt="" height={"60px"} />
              <img src={AppStore} alt="" height={"60px"} />
            </div>
          </Section>
          <List />
        </Container>
      </Screen>
      <Flex>
        <div className={"left"}>
          <div className={"content"}>
            <Header>Ответы на частые вопросы</Header>
            <div className="dropdown__list">
              <Dropdown header={"Требуется консультация "} text={"Поможем с выбором техники, рассчитаем стоимость, расскажем о сервисе."}/>
              <Dropdown header={"Требуется консультация в выборе техники, расчёте стоимости?"} text={"Поможем с выбором техники, рассчитаем стоимость, расскажем о сервисе."}/>
              <Dropdown header={"Требуется консультация в выборе техники, расчёте стоимости в 3 строки?"} text={"Поможем с выбором техники, рассчитаем стоимость, расскажем о сервисе."}/>
              <Dropdown header={"Требуется консультация в выборе техники, расчёте стоимости?"} text={"Поможем с выбором техники, рассчитаем стоимость, расскажем о сервисе."}/>
            </div>
          </div>
        </div>
        <div className={"right"}>
          <div className={"content"}>
            <Header>Остались вопросы?</Header>
            <div>Отправьте заявку. Расскажем подробнее про сервис, поможем с оформлением заказа, найдем исполнителя.</div>
            <ButtonPrimary style={{width: "270px", margin: "40px 0"}}>Оставить заявку</ButtonPrimary>
            <div className={"text"}>А также вы можете связаться с нами по телефону или в мессенджерах</div>
            <div className="phone">+7 (929) 724-19-05</div>
            <div className="links">
              <div className="link">
                <WA/>
                Whatsapp
              </div>
              <div className="link">
                <TG/>
                Telegram
              </div>
            </div>
          </div>
        </div>
      </Flex>
    </>
  );
};

export default MainPage;
