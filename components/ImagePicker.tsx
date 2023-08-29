import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity } from 'react-native';
import * as ExpoImagePicker from 'expo-image-picker';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

interface ImagePickerProps {
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}
const ImagePicker: React.FC<ImagePickerProps> = ({ setImage }) => {
  const pickImage = async () => {
    let result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1
    });


    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StyledImage onPress={pickImage}>
        <RoundIcon>
          <AntDesign name='camerao' size={24} color='black' />
        </RoundIcon>
      </StyledImage>
    </View>
  );
};

export default ImagePicker;

const StyledImage = styled(TouchableOpacity)`
  background-color: #f0f0f4;
  padding: 180px 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoundIcon = styled(View)`
  width: 55px;
  height: 55px;
  border-radius: 100px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;
