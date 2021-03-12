import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Alert, View } from 'react-native';
import { useMutation } from '@apollo/react-hooks'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_USER } from '../constants'


const LoginWrapper = styled(View)`
flex:1;
background-color: #fff;
align-items: center;
justify-content: center;
`;

const Login = ({ navigation }) => {
const [ loginUser, { loading }] = useMutation(LOGIN_USER);
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');

return(
  <LoginWrapper>
    
  </LoginWrapper>
)

}

