import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Alert, View } from 'react-native';
import { useMutation } from '@apollo/react-hooks'
import AsyncStorage from '@react-native-async-storage/async-storage';
import  TextInput from '../components/TextInput/TextInput'
import Button from '../components/Button/Button'
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
    <TextInput onChangeText={setUserName}
    value={userName}
    placeholder='Votre username'
    textContentType='username'
    />
    <TextInput onChangeText={setPassword}
    value={password}
    placeholder='Votre password'
    textContentType='password'
    />
    <Button
    title= { loading ? 'Loading...' : 'Login'}
    onPress={() =>{
      loginUser({ variables: { userName, password}})
      .then(({data}) => {
        const { token } = data.loginUser;
        AsyncStorage.setItem('token', token).then(value => {
          navigation.navigate('Main')
        })
      })
      .catch(error => {
        if (error) {
          Alert.alert(
            'Error',
            error.graphQLErrors.map(({ message }) => message)[0],
          )
        }
      })
    }}
    />
  </LoginWrapper>
)
}
export default Login;

