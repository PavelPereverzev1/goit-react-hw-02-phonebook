import styled from '@emotion/styled';

export const Form = styled.form`
  width: 400px;
  height: 250px;
  padding: 16px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  label {
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 500;
  }
  input {
    padding: 4px 8px;
    height: 30px;
    max-width: 300px;
    font-size: 16px;
    margin-bottom: 20px;
    border-radius: 4px;
    :active,
    :focus {
      outline-color: #3b8396;
    }
  }
  button {
    max-width: fit-content;
    padding: 8px 16px;
    margin-top: auto;
    font-size: 16px;
    font-weight: 600;
    background-color: #72cccc;
    border-radius: 4px;
  }
`;
