import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styled from 'styled-components/native'
import { GET_POSTS } from '../constants'
import { useQuery } from '@apollo/react-hooks'
import PostItem from '../components/Post/PostItem'

const PostWrapper = styled(View)`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
`;

const PostsList = styled(FlatList)`
width: 100%;
`;

const PostsText = styled(Text)`
font-size:20px;
color: black;
`;

const Posts = ({ navigation }) => {
  const { loading , data } = useQuery(GET_POSTS);
  return (
    <PostWrapper>
      {loading ? (
        <PostsText>{ loading ? 'Loading...' : 'empty' }</PostsText>
      ): (
        <PostsList
        data= {data.posts}
        keyExtractor= { item => String(item.id)}
        renderItem={({ item }) => (
          <PostItem item={item} navigation={navigation}/>
        )}
        />
      )}
    </PostWrapper>
  )
}
export default Posts