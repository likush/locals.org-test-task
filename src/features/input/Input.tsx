import React from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components';

type BaseInputProps = {
  value: string;
  onChange(value: string): void;
};

const BaseInput = (props: BaseInputProps) => {
  const {onChange, value} = props;

  return (
    <Input placeholder="Enter value" onChangeText={onChange} value={value} />
  );
};

const Input = styled(TextInput)`
  width: 100%;
  border-width: 1px;
  border-color: darkseagreen;
  border-radius: 6px;
  padding: 10px;
  background-color: #ffffff;
`;

export default BaseInput;
