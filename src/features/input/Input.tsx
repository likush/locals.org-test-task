import React from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {selectQuery, setValue} from '../querySlice';

const BaseInput = () => {
  const dispatch = useDispatch();
  const selector = useSelector(selectQuery);

  return (
    <TextInput
      placeholder="Place your Text"
      onChangeText={nextValue => dispatch(setValue(nextValue))}
      value={selector}
    />
  );
};

const Input = styled(BaseInput)`
  color: palevioletred;
`;

export default Input;
