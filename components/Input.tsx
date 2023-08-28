import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { TinyText } from './Text';
import { styled } from 'styled-components';
import usePasswordToggle from '../utils/hooks/usePasswordToggle';
interface InputProps {
  placeholder: string;
  title: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  maxInputLength?: number;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  title,
  secureTextEntry = false
}) => {
  const [InputType, Icon] = usePasswordToggle();
  return (
    <Container>
      <InputLabel>{title}</InputLabel>
      <InputBox>
        <InputText
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={InputType === true ? secureTextEntry : false}
        />
        {secureTextEntry && Icon}
      </InputBox>
    </Container>
  );
};

export default Input;
const Container = styled(View)`
  margin-bottom: 19px;
`;
const InputLabel = styled(TinyText)`
  margin-bottom: 4px;
`;
const InputBox = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid #f0f0f4;
  padding: 11px 18px 12px 16px;
`;
const InputText = styled(TextInput)`
  font-size: 14px;
  font-family: 'MontserratBold';
  height: 28px;
  ::placeholder {
    color: #aaabae;
  }
`;
