import styled from "styled-components";

export const InstructionCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 470px;
  gap: 20px;
  padding: 66px 40px 40px 40px;
  background: #ffffff;
  border-radius: 5px;
  
  .card__header {
    font-size: 20px;
    font-weight: 700;
    color: #17161d;
  }

  .card__text {
    font-size: 16px;
    color: #17161d;
  }
`;
