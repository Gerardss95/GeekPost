import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components';
import ImagePicker from '../components/ImagePicker';
import { storage } from '../services/config';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { uploadPost } from '../services/helpers';
import { auth } from '../services/config';
import { Entypo } from '@expo/vector-icons';
import { BoldTinyText, SmallText, RegularText } from '../components/Text';

const NewPost = ({ navigation }) => {
  const [image, setImage] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');

  const handleContinue = async () => {
    try {
      const fetchResponse = await fetch(image as string);
      const blob = await fetchResponse.blob();
      const fileRef = ref(
        storage,
        `posts/${auth.currentUser?.uid}-${Date.now()}`
      );
      const result = await uploadBytes(fileRef, blob);
      const url = await getDownloadURL(result.ref);
      const response = await uploadPost({
        url,
        description,
        userId: auth.currentUser?.uid,
        createdAt: Date.now()
      });
      response && navigation.navigate('Home');
    } catch (error: any) {
      console.log('ERR: ' + error.message);
    }
  };
  return (
    <MainContainer>
      <BannerTop>
        <TextContainer>
          {image ? (
            <RoundIcon onPress={() => setImage(null)}>
              <Entypo name='chevron-left' size={24} color='black' />
            </RoundIcon>
          ) : (
            <RoundIcon onPress={() => navigation.goBack()}>
              <Entypo name='cross' size={24} color='black' />
            </RoundIcon>
          )}
          <SmallText>Nueva Publicación</SmallText>
          <TouchableOpacity onPress={handleContinue}>
            <BlueText>{image ? 'Compartir' : 'Siguiente'}</BlueText>
          </TouchableOpacity>
        </TextContainer>
      </BannerTop>
      {!image ? (
        <ImagePicker setImage={setImage} />
      ) : (
        <PostPreview>
          <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />
          <Input
            placeholder='Escribe una descripción...'
            onChangeText={(text: string) => setDescription(text)}
            value={description}
          ></Input>
        </PostPreview>
      )}
    </MainContainer>
  );
};

export default NewPost;

const Input = styled(TextInput)`
  font-family: 'MontserratRegular';
  font-size: 14px;
  margin-left: 22px;
  ::placeholder {
    color: #000;
  }
`;

const PostPreview = styled(View)`
  padding: 15px 36px 15px 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom-color: #76777a4b;
  border-bottom-width: 1px;
`;

const BlueText = styled(RegularText)`
  color: #4147d5;
`;
const RoundIcon = styled(TouchableOpacity)`
  width: 28px;
  height: 28px;
  border-radius: 100px;
  background-color: #f9f9fc;
  justify-content: center;
  align-items: center;
`;

const BannerTop = styled(View)`
  border-bottom-color: #76777a4b;
  border-bottom-width: 1px;
  padding-bottom: 5px;
`;
const Name = styled(BoldTinyText)`
  align-self: center;
`;

const TextContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px 0 16px;
  justify-content: space-between;
`;
const MainContainer = styled(View)`
  padding-top: 90px;
  flex: 1;
  /* align-items: center; */
  background-color: #fff;
`;
