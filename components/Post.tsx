import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Text, View, Image } from 'react-native';
import { getUser } from '../services/helpers';
import { TinyText, BoldTinyText } from './Text';

interface PostProps {
  userId: string;
  image: string;
  description?: string;
  name?: string;
}

const Post: React.FC<PostProps> = ({ userId, image, description, name }) => {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const getUserData = async () => {
      const user = await getUser(userId);
      setUserName(user?.name);
    };
    !name ? getUserData() : setUserName(name);
  }, [userId]);

  return (
    <MainContainer>
      <UserInfo>
        <UserPicture
          source={{
            uri: 'https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg'
          }}
        />
        <BoldTinyText>{userName}</BoldTinyText>
      </UserInfo>
      <StyledImage source={{ uri: image }} />
      <Description>{description}</Description>
    </MainContainer>
  );
};

export default Post;

const MainContainer = styled(View)`
  display: flex;
  widht: 100%;
`;

const StyledImage = styled(Image)`
  width: fit-content;
  height: 330px;
`;

const UserPicture = styled(Image)`
  width: 31px;
  height: 31px;
  border-radius: 100px;
  margin-right: 10px;
`;

const UserInfo = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 28px 16px 13px 16px;
`;

const Description = styled(TinyText)`
  padding: 18px 16px 9px 16px;
`;
