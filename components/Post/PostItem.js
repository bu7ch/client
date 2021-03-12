import React from 'react';
import { Dimensions, Image, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

import PostContent from './PostContent'
import PostCount from './PostCount'


const PostItemWrapper = styled(TouchableOpacity)`
display: flex;
align-items: center;
justify-content: flex-start;
border : 1px solid #ccc;
margin-bottom: 2%;
`;

const PostItemThumbnail = styled(Image)`
width:${Dimensions.get('window').width * 0.98};
height:${Dimensions.get('window').height * 0.98};
margin:${Dimensions.get('window').margin * 0.01}px;
`;

const UserName = styled(Text)`
font-weight: bold;
font-size:16px;
`;
const PostItemDetails = styled(Text)`
width:95%;
margin: 2.5%;
`;

const PostText = styled(Text)`
flex-wrap: wrap;
max-width:95%;
font-size: 14px;
`;

const PostItem = ({item, navigation}) => {
  <PostItemWrapper
  onPress={() => navigation.navigate('Post', { username: item.userName})}>
    <PostContent  item={item} />
    <PostCount start={ item.totalStars} comments= { item.totalComments} />
  </PostItemWrapper>
}

export default PostItem;