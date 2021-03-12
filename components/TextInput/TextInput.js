import React from 'react';
import { TextInput as TextInputComponent } from 'react-native';
import styled from 'styled-components/native'

const StyledTextInput = styled(TextInputComponent)`
width: ${({ width }) => `${width}%`};
padding:18px;
display:flex;
align-items: center;
justify-content: space-around;
border-radius: 15px;
border: 1px solid #ccc;
background-color: #ccc;
font-size:20px;
margin-bottom: ${({ marginBottom}) => `${marginBottom}px`};
`;

const TextInput = ({ onChangeText, ...props }) => (
  <StyledTextInput onChangeText= { text => onChangeText(text)} {...props}/>
)

export default TextInput;