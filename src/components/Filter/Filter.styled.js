import styled from '@emotion/styled';

export const Container = styled.div`
  input {
    display: block;
    padding: 4px 8px;
    height: 20px;
    margin-bottom: 15px;
    font-size: 16px;
    padding: 4px 8px;
    border-radius: 4px;
    :active,
    :focus {
      outline-color: #3b8396;
    }
  }
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 500;
  }
`;
