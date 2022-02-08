import React, {useState} from 'react';
import {View, ActivityIndicator, ScrollView} from 'react-native';
import Input from '../../features/input/Input';
import styled from 'styled-components';
import {
  useGetAllUsersQuery,
  UserResponseType,
} from '../../features/api/apiSlice.js';
import UserListItem from '../../components/UserListItem';

const renderContent = (isLoading: boolean, data: any, navigation: any) => {
  if (!isLoading && data) {
    return (
      <ScrollView>
        {data.map((item: UserResponseType) => (
          <UserListItem
            key={item.id}
            data={item}
            onPress={() => navigateToUser(navigation, item)}
          />
        ))}
      </ScrollView>
    );
  } else if (isLoading) {
    return <Loader size="large" />;
  }
};

const navigateToUser = (navigation: any, item: UserResponseType) => {
  navigation.navigate('User', {login: item.login});
};

const UsersList = (props: any) => {
  const {navigation} = props;
  const [query, setQuery] = useState('');

  const {data, isLoading} = useGetAllUsersQuery();

  return (
    <Container>
      <Input onChange={nextQuery => setQuery(nextQuery)} value={query} />
      {renderContent(isLoading, data, navigation)}
    </Container>
  );
};

export default UsersList;

const Container = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: white;
`;

const Loader = styled(ActivityIndicator)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;
