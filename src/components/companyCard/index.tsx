import React from "react";
import { CompanyCardWrapper } from "./styles";
import { ICompanyCardProps } from "../../core/types/cards.types";

const CompanyCard: React.FC<ICompanyCardProps> = ({header, headerColor, text, textColor, background, image}) => {
  return (
    <CompanyCardWrapper style={{background: background}}>
      <div className={"card__group"}>
        <div className={"card__header"} style={{color: headerColor}}>{header}</div>
        <div className={"card__text"} style={{color: textColor}}>{text}</div>
      </div>
      <div className={"company-logo"}>
        <img src={image} alt="" />
      </div>
    </CompanyCardWrapper>
  );
};

export default CompanyCard;