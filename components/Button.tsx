import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { SmallText, BoldSmallText, RegularTextBold } from './Text';

interface ButtonProps {
  buttonText: string;
  onPress: () => void;
  linkLabel?: string;
  linkOnPress?: () => void;
  linkText?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  buttonText,
  onPress,
  linkLabel,
  linkOnPress,
  linkText,
  disabled = false
}) => {
  return (
    <MainContainer>
      <ButtonContainer disabled={disabled} onPress={onPress}>
        <ButtonText>{buttonText}</ButtonText>
      </ButtonContainer>
      {linkLabel && (
        <LinkBox>
          <SmallText>{linkLabel}</SmallText>
          <TouchableOpacity onPress={linkOnPress}>
            <BoldSmallText>{linkText}</BoldSmallText>
          </TouchableOpacity>
        </LinkBox>
      )}
    </MainContainer>
  );
};

export default Button;

const MainContainer = styled(View)``;
const LinkBox = styled(View)`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;
interface ButtonContainerProps {
  disabled?: boolean;
}
const ButtonContainer = styled(TouchableOpacity)<ButtonContainerProps>`
  background-color: ${(props: ButtonContainerProps) =>
    props.disabled ? '#4146d558' : '#4147d5'};
  padding: 20px 16px;
  border-radius: 100px;
  margin-top: 20px;
`;

const ButtonText = styled(RegularTextBold)`
  color: #ffffff;
  text-align: center;
`;
