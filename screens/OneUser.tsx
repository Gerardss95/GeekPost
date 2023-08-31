import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import styled from 'styled-components';
import { getOneUserPosts, getUser } from '../services/helpers';
import { BoldTinyText, ProfileTitleText } from '../components/Text';
import { Entypo } from '@expo/vector-icons';
import Post from '../components/Post';

const OneUser = ({ route, navigation }) => {
  const { id } = route.params;
  const [posts, setPosts] = useState<any>([]);
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const getUserPosts = async () => {
      const userPosts = await getOneUserPosts(id);
      setPosts(userPosts);
    };
    const getUserData = async () => {
      const user = await getUser(id);
      setUserName(user?.name);
    };
    getUserPosts();
    getUserData();
  }, [id]);
  return (
    <MainContainer>
      <BannerTop>
        <TextContainer>
          <RoundIcon onPress={() => navigation.goBack()}>
            <Entypo name='chevron-left' size={24} color='black' />
          </RoundIcon>

          <View style={{ width: 28, height: 28 }}></View>
        </TextContainer>
        <UserInfo>
          <UserPicture
            source={{
              uri: 'https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg'
            }}
          />
          <ProfileTitleText>{userName}</ProfileTitleText>
        </UserInfo>
      </BannerTop>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('OnePost', {
                id: item.id
              });
            }}
          >
            <Post
              userId={item.userId}
              description={item.description}
              image={item.url}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </MainContainer>
  );
};

export default OneUser;

const UserPicture = styled(Image)`
  width: 88px;
  height: 88px;
  border-radius: 100px;
  margin-bottom: 14px;
`;

const UserInfo = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BannerTop = styled(View)`
  padding-bottom: 5px;
`;
const TextContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px 0 16px;
  justify-content: space-between;
`;

const MainContainer = styled(View)`
  margin-top: 70px;
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
