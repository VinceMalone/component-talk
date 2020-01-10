import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background-color: white;
  border: 0.0625em solid #c1c5c8;
  border-radius: 0.1875em;
  color: #2a3742;
  font-family: sans-serif;
  font-size: 0.666666667em;
  font-weight: normal;
  line-height: 1.5em;
  height: 2.5em;
  outline: none;
  padding: 0 0.75em;
  text-align: left;

  :focus {
    border-color: #006dd4;
    box-shadow: inset 0 0 0 0.0625em #006dd4;
  }
`;

const NumInput = styled(Input)`
  text-align: right;
`;

export const TextInput = ({ ...props }) => {
  return <Input {...props} type="text" />;
};

export const NumberInput = ({ ...props }) => {
  return <NumInput {...props} step=".01" type="number" />;
};
