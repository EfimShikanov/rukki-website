import styled from "styled-components";

export const Partners = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  height: auto;
  
  gap: 30px;

  .left {
    background: #f8f9fa;
    padding: 100px 100px 0 0;
    display: flex;
    justify-content: flex-end;
    width: 49%;

    .content {
      max-width: 470px;
      width: 100%;
      color: #17161d;

      .dropdown__list {
        display: flex;
        flex-direction: column;
      }
    }
  }

  .right {
    display: flex;
    background: #f9c843;
    padding: 100px 0 0 100px;
    width: 49%;

    .content {
      max-width: 470px;
      width: 100%;
      color: #17161d;

      .phone {
        font-size: 48px;
        font-weight: 700;
        margin-top: 40px;
      }

      .text {
        font-size: 20px;
      }
      
      .links {
        display: flex;
        gap: 30px;
        margin-top: 40px;
        flex-wrap: wrap;
        
        .link {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 192px;
          height: 70px;
          font-size: 20px;
          padding: 14px 24px;
          border-radius: 40px;
          background: #ffffff;  
        }
      }
    }
  }
`;

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;

  .content {
    display: flex;
    justify-content: space-between;
    padding-top: 70px;
    
    .background {
      background-image: url("img.png");
      background-repeat: no-repeat;
      background-position: bottom 0 right 0;
      background-size: contain;
      width: calc(100% - 370px - 60px);
      
      .header {
        font-size: 44px;
        font-weight: 700;
        max-width: 304px;
      }
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 45%;

  .images {
    display: flex;
    gap: 30px;
  }
`;

export const ShowMoreButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  font-size: 14px;
  font-weight: 500;
  color: #17161d;
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  margin-top: 30px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    background: #f9c843;
    border-radius: 5px;
    width: calc(100% - 300px);
    min-width: 270px;

    .buttons {
      display: flex;
      gap: 30px;
    }
  }
`;

export const VehiclesWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #17161d;
  margin-bottom: 40px;
`;
