import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #17161d;
  color: #ffffff;
  font-size: 14px;
  
  .footer__content {
    width: 100%;
    max-width: 1170px;
    display: flex;
    padding: 50px 0 55px 0;
    flex-direction: column;

    .footer__row {
      display: flex;
      justify-content: space-between;
      width: 100%;
      
      .footer__group {
        display: flex;
        flex-direction: column;
        gap: 20px;
        
        .phone {
          font-size: 18px;
          font-weight: 700;
          width: 100%;
          text-align: center;
        }
      }
      
      &:first-child {
        padding-bottom: 30px;
        border-bottom: 1px solid #d7d7d7;
      }
      
      &:last-child {
        padding-top: 30px;
      }
      
      .links {
        display: flex;
        gap: 12px;
        margin-top: 40px;
      }
      
      .app-links {
        display: flex;
        gap: 30px;
        
        img {
          width: 170px;
          height: 50px;
        }
      }
    }
  }

  img {
    width: 120px;
  }
`;
