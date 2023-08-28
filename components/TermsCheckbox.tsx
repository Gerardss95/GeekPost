import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import CheckIcon from '../assets/checked';
import UncheckedIcon from '../assets/unchecked';

interface TermsCheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

const TermsCheckbox: React.FC<TermsCheckboxProps> = ({
  label,
  isChecked,
  onChange
}) => {
  return (
    <Container onPress={() => onChange(!isChecked)}>
      {isChecked ? <CheckIcon /> : <UncheckedIcon />}
      <LabelText>{label}</LabelText>
    </Container>
  );
};

export default TermsCheckbox;

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const LabelText = styled.Text`
  font-size: 12px;
  margin-left: 14px;
`;
