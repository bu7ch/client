import React from 'react';
import { Text, FlatList, View } from 'react-native';
import styled from 'styled-components/native'
import { useQuery } from '@apollo/react-hooks'

// import Notification from '../components/Notification/Notification'
// import { GET_NOTIFICATIONS } from '../constants'

const NotificationsWrapper = styled(View)`
`;
const NotifiactionsBody = styled(View)`
`;
const NotificationsText = styled(Text)`
`;
const NotificationsWrapper = styled(View)`
`;



const Notifications = () => {
  const { loading , data } = useQuery(GET_NOTIFICATIONS)

  return (
    <NotificationsWrapper>
      {loading || !data.Notifications.length ?(
        <NotifiactionsBody>
          <NotificationsText>
            {loading ? 'Loading...': 'empty'}
          </NotificationsText>
        </NotifiactionsBody>
      ) : (
        <FlatList
        data= { data.notifications}
        keyExtractor={item => String(item.id) }
        renderItem={({item }) =>(
          <Notification title={item.title} body={item.body}/>
        )}
    />
      )}
    </NotificationsWrapper>
  )
}
export default Notifications