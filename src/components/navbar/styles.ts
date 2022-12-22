import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f8f9fa;
  padding-top: 20px;

  .navbar__content {
    width: 100%;
    max-width: 1170px;
    display: flex;
    justify-content: space-between;
    gap: 5px;
    height: 48px;
    align-items: center;

    img {
      width: 120px;
    }

    .links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      gap: 40px;

      a {
        font-weight: 700;
        font-size: 18px;
      }
    }
  }
`;

export const ButtonSecondary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 150px;
  color: #ec6e44;
  border: 1px solid #ec6e44;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
`;
