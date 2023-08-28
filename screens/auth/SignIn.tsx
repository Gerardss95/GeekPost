import React, { useState } from 'react';
import { View } from 'react-native';
import Input from '../../components/Input';
import styled from 'styled-components';
import Button from '../../components/Button';
import { TinyText, TitleText } from '../../components/Text';
import { signIn } from '../../services/helpers';
import TermsCheckbox from '../../components/TermsCheckbox';

export default function SignInScreen({ navigation }) {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setValues({ ...values, [field]: value });
  };
  const handleSignIn = async () => {
    try {
      const user = await signIn(values.email, values.password);
    } catch (error) {}
  };
  return (
    <MainContainer>
      <Title>¡Te echábamos de menos!</Title>
      <Input
        title='Email'
        placeholder='Tu email'
        value={values.email}
        onChangeText={(text: string) => handleInputChange('email', text)}
      />
      <Input
        title='Crea una contraseña'
        placeholder='Contraseña'
        value={values.password}
        onChangeText={(text: string) => handleInputChange('password', text)}
        secureTextEntry={true}
      />
      <RowBox>
        <TermsCheckbox
          label='Recuérdame'
          isChecked={true}
          onChange={() => {}}
        />
        <TextAlignedCenter>¿Has olvidado la contraseña?</TextAlignedCenter>
      </RowBox>

      <Button
        buttonText='Iniciar sesión'
        onPress={handleSignIn}
        linkLabel='¿Aun no tienes una cuenta?'
        linkText=' Crear cuenta'
        linkOnPress={() => navigation.navigate('Sign Up')}
      />
    </MainContainer>
  );
}
const TextAlignedCenter = styled(TinyText)`
  align-self: center;
`;
const RowBox = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled(TitleText)`
  margin-top: 152px;
  margin-bottom: 33px;
`;
const MainContainer = styled(View)`
  flex: 1;
  background-color: #fff;
  padding: 0 20px;
`;
