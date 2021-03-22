import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';

import { Container } from './styles';

function Admin() {
  const { push } = useHistory();
  const [age, setAge] = useState(23);
  const [houseNumber, setHouseNumber] = useState(200);
  const [name, setName] = useState('Lucas');
  const [date, setDate] = useState('02/05/1997');
  const [adress, setAdress] = useState('Capao');

  function increaseAge() {
    setAge(age + 1);
  }

  function decreaseAge() {
    setAge(age - 1);
  }

  function increaseHouseNumber() {
    setHouseNumber(houseNumber + 1);
  }

  function decreaseHouseNumber() {
    setHouseNumber(houseNumber - 1);
  }

  function changeAll() {
    setName('Marcos');
    setDate('92');
    setAdress('a');
    setAge(29);
    setHouseNumber(199);
  }

  function back() {
    push('/');
  }

  return (
    <Container>
      <p>
        Nome:
        {name}
      </p>
      <p>
        Data de nascimento:
        {date}
      </p>
      <p>
        rua:
        {adress}
      </p>
      <p>
        idade:
        {age}
      </p>
      <div>
        <Button
          label="aumentar"
          onClick={increaseAge}
        />
        <Button
          label="diminuir"
          onClick={decreaseAge}
        />
      </div>
      <p>
        numero:
        {houseNumber}
      </p>
      <div>
        <Button
          label="aumentar"
          onClick={increaseHouseNumber}
        />
        <Button
          label="diminuir"
          onClick={decreaseHouseNumber}
        />
      </div>
      <br />
      <Button
        label="mudar tudo"
        onClick={changeAll}
      />
      <Button
        label="voltar"
        onClick={back}
      />

    </Container>
  );
}

export default Admin;
