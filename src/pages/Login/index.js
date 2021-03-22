import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

function Login() {
  const { push } = useHistory('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const bancodeUsuarios = {
    email: 'marcos_falcade1@hotmail.com',
    password: '1234',
  };

  function handleSignIn() {
    const contentEmail = email.length > 0;
    const contentPassword = password.length > 0;

    if (!contentEmail && !contentPassword) {
      alert('Campos vazios');
      return;
    }

    const validEmail = email === bancodeUsuarios.email;
    const validPassword = password === bancodeUsuarios.password;

    if (!validEmail && !validPassword) {
      alert('Campos errados');
      return;
    }

    push('/admin');
  }

  return (
    <Container>
      <h1>Login</h1>
      <Input
        placeholder="E-mail"
        onChange={(valor) => { setEmail(valor.target.value); }}
        value={email}
      />
      <Input
        placeholder="Senha"
        onChange={(valor) => { setPassword(valor.target.value); }}
        type="password"
        value={password}
      />
      <Button onClick={handleSignIn} label="Logar" />
      <Button onClick={() => { push('/Cadastro'); }} label="Cadastrar" />

    </Container>
  );
}

export default Login;
