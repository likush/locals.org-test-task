import React, {useState} from 'react';
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import Input from '../../components/Input';
import styled from 'styled-components';
import {
  useGetUserQuery,
  UserResponseType,
} from '../../features/api/apiSlice.js';
import Avatar from '../../components/Avatar';

const octocatImage = 'https://avatars.githubusercontent.com/u/583231?v=4';

const renderContent = (user: any, isLoading: boolean, navigation: any) => {
  if (!isLoading && user) {
    const {avatar_url, login, html_url} = user;

    return (
      <UserContent onPress={() => navigateToUser(navigation, user)}>
        <Avatar uri={avatar_url} size={80} />
        <Info>
          <Name>{`@${login}`}</Name>
          <Repository>{html_url}</Repository>
        </Info>
      </UserContent>
    );
  } else if (isLoading) {
    return <Loader size="large" />;
  } else if (!isLoading && !user) {
    return (
      <EmptyContent>
        <OctocatImage source={{uri: octocatImage}} />
        <EmptyContentText>
          Nothing to show. Enter something in input, please
        </EmptyContentText>
      </EmptyContent>
    );
  }
};

const navigateToUser = (navigation: any, user: UserResponseType) => {
  navigation.navigate('User', {user});
};

const HomeScreen = (props: any) => {
  const {navigation} = props;

  const [query, setQuery] = useState('');
  const {data, isLoading} = useGetUserQuery(query);

  return (
    <Container>
      <Input onChange={nextQuery => setQuery(nextQuery)} value={query} />
      {renderContent(data, isLoading, navigation)}
    </Container>
  );
};

export default HomeScreen;

const Container = styled(View)`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
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

const UserContent = styled(TouchableOpacity)`
  background-color: white;
  padding: 16px 0;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Info = styled(View)`
  margin-left: 20px;
`;

const Name = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`;

const Repository = styled(Text)`
  font-size: 12px;
  color: #606060;
`;

const EmptyContent = styled(View)`
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`;

const OctocatImage = styled(Image)`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  margin-bottom: 16px;
`;

const EmptyContentText = styled(Text)`
  color: #606060;
`;
