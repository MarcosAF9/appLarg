import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;



  button {
    display: flex;
    flex-direction: row;
    border: 0;
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 5px;
  }

  div {
    display: flex;
  }
`;
