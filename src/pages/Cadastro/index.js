import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

function Cadastro() {
  const { push } = useHistory();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [birth, setBirth] = useState('');
  const [adress, setAdress] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function valid() {
    if (name !== '' && age !== '' && birth !== '' && adress !== '' && houseNumber !== '' && email !== '' && password !== '') {
      return true;
    }
    return false;
  }

  function cadastrar() {
    if (valid(true)) {
      alert(`Nome: ${name}\nIdade: ${age}\nData de nascimento: ${birth}\nRua: ${adress}\nNúmero da casa: ${houseNumber}`);
      push('/');
    } else {
      alert('Preencha todos os campos');
    }
  }

  function back() {
    push('/');
  }

  return (
    <Container>
      <h1>CADASTRO</h1>

      <Input
        type="text"
        placeholder="Nome*"
        value={name}
        onChange={(valor) => setName(valor.target.value)}
      />
      <Input
        type="text"
        placeholder="Idade*"
        value={age}
        onChange={(valor) => setAge(valor.target.value)}
      />
      <Input
        type="text"
        placeholder="Data de nascimento*"
        value={birth}
        onChange={(valor) => setBirth(valor.target.value)}
      />
      <Input
        type="text"
        placeholder="Rua*"
        value={adress}
        onChange={(valor) => setAdress(valor.target.value)}
      />
      <Input
        type="text"
        placeholder="Número da casa*"
        value={houseNumber}
        onChange={(valor) => setHouseNumber(valor.target.value)}
      />
      <Input
        type="text"
        placeholder="E-mail*"
        value={email}
        onChange={(valor) => setEmail(valor.target.value)}
      />
      <Input
        type="text"
        placeholder="Senha*"
        value={password}
        onChange={(valor) => setPassword(valor.target.value)}
      />

      <Button
        onClick={cadastrar}
        label="Cadastrar"
      />

      <Button
        onClick={back}
        label="Voltar"
      />

    </Container>
  );
}

export default Cadastro;
