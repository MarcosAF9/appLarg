import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;

  input {
    padding: 7px 10px;
    border: 1px solid #000;
    border-radius: 5px;
    margin-top: 12px;
    font-size: 20px;
    margin-bottom: 10px;
  }

  button {
    border: 0;

    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 5px;
  }
`;
