import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

import Logo from '../assets/logo';
import styled from 'styled-components';

interface TopBannerProps {
  newPost: () => void;
}

const TopBanner = ({ newPost }) => {
  return (
    <MainContainer>
      <Logo />
      <UserContainer>
        <TouchableOpacity onPress={newPost}>
          <Image
            source={require('./../assets/addPost.png')}
            style={{ width: 29, height: 29 }}
          />
        </TouchableOpacity>
        <Image
          source={require('./../assets/user.png')}
          style={{ width: 29, height: 29, marginLeft: 14 }}
        />
      </UserContainer>
    </MainContainer>
  );
};

export default TopBanner;

const MainContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px 13px 20px;
  border-bottom: 1px solid #b2b2c2;
`;

const UserContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
