import gql from 'graphql-tag'


export const LOGIN_USER = gql`
mutation loginUser($userName: String!, $password: String!) {
  loginUser()
}