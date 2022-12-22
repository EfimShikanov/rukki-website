import styled from "styled-components";

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 470px;
  border-bottom: 1px solid #d7d7d7;
  padding: 20px 0;
  
  &:last-child {
    border: none;
  }
`;

export const DropdownTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 2px;

  .top__group {
    display: flex;

    svg {
      margin-right: 22px;
    }
  }
`;

export const DropdownBottom = styled.div`
  display: flex;
  width: 100%;
  height: 0;
  padding-left: 42px;
  transform: scaleY(0);
  transition: transform 0.25s, height 0.25s;
  font-size: 14px;
  color: #5e5f67;
`;
