import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import { getPost, getUser } from '../services/helpers';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { Entypo } from '@expo/vector-icons';
import { BoldTinyText, SmallText } from '../components/Text';
const OnePost = ({ route, navigation }) => {
  const { id } = route.params;
  const [post, setPost] = useState<any>([]);
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const getPostData = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    getPostData();
  }, [id]);

  useEffect(() => {
    const getUserData = async () => {
      const user = await getUser(post.userId);
      setUserName(user?.name);
    };
    getUserData();
  }, [post]);

  return (
    <MainContainer>
      <BannerTop>
        <TextContainer>
          <RoundIcon onPress={() => navigation.goBack()}>
            <Entypo name='chevron-left' size={24} color='black' />
          </RoundIcon>
          <StyledSmallText>PUBLICACIÓN</StyledSmallText>
          <View style={{ width: 28, height: 28 }}></View>
        </TextContainer>
        <Name>{userName}</Name>
      </BannerTop>
      <Post
        userId={post.userId}
        description={post.description}
        image={post.url}
        name={userName}
      />
    </MainContainer>
  );
};

export default OnePost;

const StyledSmallText = styled(SmallText)`
  color: #76777a;
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
  margin-top: 90px;
  flex: 1;
`;

const RoundIcon = styled(TouchableOpacity)`
  width: 28px;
  height: 28px;
  border-radius: 100px;
  background-color: #e5e5e5;
  justify-content: center;
  align-items: center;
`;
