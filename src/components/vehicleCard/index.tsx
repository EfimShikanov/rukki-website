import React from "react";
import { IVehicleCardProps } from "../../core/types/cards.types";
import { VehicleCardWrapper } from "./styles";
import { ButtonPrimary } from "../form/styles";
import { ButtonSecondary } from "../navbar/styles";

const VehicleCard: React.FC<IVehicleCardProps> = ({ name, price, image }) => {
  return (
    <VehicleCardWrapper>
      <img src={image} alt="" />
      <div className={"card__group"}>
        <div className={"card__header"}>{name}</div>
        <div className={"card__text"}>{`от ${price} ₽ / час`}</div>
      </div>
      <ButtonSecondary className={"card__button"} style={{ width: "270px" }}>
        Заказать
      </ButtonSecondary>
    </VehicleCardWrapper>
  );
};
export default VehicleCard;
