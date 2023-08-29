import React, { useState } from 'react';
import { View } from 'react-native';
import Input from '../../components/Input';
import styled from 'styled-components';
import Button from '../../components/Button';
import TermsCheckbox from '../../components/TermsCheckbox';
import { TitleText } from '../../components/Text';
import { signUp, saveUser } from '../../services/helpers';

export default function SignUpScreen({ navigation }) {
  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    termsAccepted: false
  });

  const handleInputChange = (field: string, value: any) => {
    setValues(prevValues => ({
      ...prevValues,
      [field]: value
    }));
  };

  const isFormValid = values.password.length >= 8 && values.termsAccepted;

  const handleSignUp = async () => {
    try {
      const user = await signUp(
        values.email,
        values.password,
        values.name,
        values.surname
      );
    } catch (error) {}
  };

  return (
    <MainContainer>
      <TitleText>¡Bienvenido! 👋</TitleText>
      <Input
        title='Nombre'
        placeholder='Nombre'
        value={values.name}
        onChangeText={(text: string) => handleInputChange('name', text)}
      />
      <Input
        title='Apellidos'
        placeholder='Apellidos'
        value={values.surname}
        onChangeText={(text: string) => handleInputChange('surname', text)}
      />
      <Input
        title='Email'
        placeholder='ejemplo@gmail.com'
        value={values.email}
        onChangeText={(text: string) => handleInputChange('email', text)}
      />
      <Input
        title='Crea una contraseña'
        placeholder='mínimo 8 carácteres'
        value={values.password}
        onChangeText={(text: string) => handleInputChange('password', text)}
        secureTextEntry={true}
      />
      <TermsCheckbox
        label='Acepto los Términos y condiciones y la Política de privacidad'
        isChecked={values.termsAccepted}
        onChange={(checked: boolean) =>
          handleInputChange('termsAccepted', checked)
        }
      />
      <Button
        disabled={!isFormValid}
        buttonText='Crear cuenta'
        onPress={handleSignUp}
        linkLabel='¿Ya tienes una cuenta?'
        linkText=' Iniciar sesión'
        linkOnPress={() => navigation.navigate('Sign In')}
      />
    </MainContainer>
  );
}

const MainContainer = styled(View)`
  flex: 1;
  background-color: #fff;
  padding: 0 20px;
`;
