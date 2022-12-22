import React, { useState } from "react";
import {ReactComponent as QuestionIcon} from "./../../core/assets/icons/question.svg";
import {ReactComponent as ArrowIcon} from "./../../core/assets/icons/arrow-right.svg";
import { DropdownBottom, DropdownTop, DropdownWrapper } from "./styles";

interface IDropdownProps {
  header: string;
  text: string;
}

const Dropdown: React.FC<IDropdownProps> = ({header, text}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DropdownWrapper onClick={() => setOpen(!open)}>
      <DropdownTop>
        <div className="top__group">
          <QuestionIcon/>
          <div>{header}</div>
        </div>
        <div style={open ? {transition: "transform 0.25s", transform: "rotate(90deg)" } : {transition: "transform 0.25s"}}>
          <ArrowIcon/>
        </div>
      </DropdownTop>
      <DropdownBottom style={open ? {transform: "scaleY(1)", height: "fit-content"} : {}}>
        {text}
      </DropdownBottom>
    </DropdownWrapper>
  );
};

export default Dropdown;