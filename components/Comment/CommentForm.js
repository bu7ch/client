import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'


const CommentFormWrapper = styled(View)`
width: 100%;
background-color:#ccc;
padding: 2%;
display:flex;
height: 90%;
flex-direction: row;
justify-content: space-between;
`;

const CommentForm = () => {
  const [comment, comments] = useState('');

  return (
    <CommentFormWrapper>
      <TextInput 
      width={75}
      marginBottom={0}
      onChangeText={comments}
      placeholder='Vos commentaires'
      value={comment}/>
      <Button 
      width={20}
      padding={10}
      title={
        <Ionicons
        name={`${Platform.OS === 'ios' ? 'ios':'md'}-send`}
        size={42}
        color='white'
        />

      }
      />
    </CommentFormWrapper>
  )

}
export default CommentForm