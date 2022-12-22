import styled from "styled-components";

export const CompanyCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  padding: 40px;
  border-radius: 5px;
  
  .card__group {
    display: flex;
    flex-direction: column;

    .card__header {
      font-size: 32px;
      line-height: 48px;
    }

    .card__text {
      font-size: 14px;
      line-height: 21px;
    }
  }

  .company-logo {
    height: 70px;
    margin-top: 80px;
    
    img {
      height: 70px;
    }
  }
`;