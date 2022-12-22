import React from "react";
import { IInstructionCardProps } from "../../core/types/cards.types";
import { InstructionCardWrapper } from "./styles";
import Phones from "./../../core/assets/images/phones.png";

const InstructionCard: React.FC<IInstructionCardProps> = ({header, text}) => {
  return (
    <InstructionCardWrapper>
      <img src={Phones} alt="" height={"200px"} width={"219px"}/>
      <div className={"card__header"}>{header}</div>
      <div className={"card__text"}>{text}</div>
    </InstructionCardWrapper>
  );
};

export default InstructionCard;