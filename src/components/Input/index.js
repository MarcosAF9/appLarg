import React from 'react';

import { Container } from './styles';

function Input({
  label, placeholder, type, value, onChange,
}) {
  return (
    <Container>
      <input
        label={label}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}

export default Input;
