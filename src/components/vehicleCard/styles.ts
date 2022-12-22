import styled from "styled-components";

export const VehicleCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 300px;
  gap: 15px;

  &:hover {
    .card__header {
      color: #ec6e44;
    }

    .card__button {
      background: #ec6e44 !important;
      color: #ffffff !important;
    }
  }

  .card__group {
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: #17161d;

    .card__header {
      font-size: 20px;
    }

    .card__text {
      font-size: 14px;
    }
  }
`;
