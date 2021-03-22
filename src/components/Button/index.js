import React from 'react';

import { Container } from './styles';

function Button({ label, onClick }) {
  return (
    <Container>
      <button type="button" onClick={onClick}>{label}</button>
    </Container>
  );
}

export default Button;
