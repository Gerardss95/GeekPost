import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import styled from 'styled-components';
import { getPosts } from '../services/helpers';
import Post from '../components/Post';
import { useIsFocused } from '@react-navigation/native';
import TopBanner from '../components/TopBanner';

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState<any>([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    const getPostsData = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    if (isFocused) {
      getPostsData();
    }
  }, [isFocused]);
  return (
    <MainContainer>
      <TopBanner newPost={() => navigation.navigate('NewPost')} />
      {posts && (
        <StyledFlatList
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
      )}
    </MainContainer>
  );
}

const MainContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
`;
const StyledFlatList = styled(FlatList)`
  width: 100%;
`;
