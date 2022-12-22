import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .list__item {
  }
`;

export const ListItem = styled.div`
  display: flex;
  gap: 20px;

  .listItem__group {
    display: flex;
    flex-direction: column;

    .listItem__header {
      font-size: 20px;
      font-weight: 700;
      color: #17161d;
    }
    
    .listItem__text {
      font-size: 16px;
      color: #17161d;
    }
  }
`;
