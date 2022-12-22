import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 370px;
  
  .form__header {
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    color: #17161d;
    margin-bottom: 10px;
  }

  .form__text {
    font-size: 16px;
    color: #17161d;
    margin-bottom: 10px;
  }

  .form__bottomText {
    font-size: 12px;
    color: #17161d;
    opacity: 0.5;
    text-align: center;
  }
`;

export const InputBox = styled.div`
  display: flex;
  width: 370px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 16px 14px;

  svg {
    margin-right: 20px;
  }

  input {
    border: none;
    outline: none;
    font-size: 14px;
    width: calc(100% - 24px - 14px - 20px);
    font-family: "Google Sans", sans-serif;
  }
`;

export const ButtonPrimary = styled.button`
  width: 370px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #ec6e44;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
`;
