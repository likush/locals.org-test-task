import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Avatar from './Avatar';
import React from 'react';
import styled from 'styled-components';
import {useGetUserQuery} from '../features/api/apiSlice.js';

type QueryResultPropsType = {
  navigateToUser: (user: any) => void;
  query: string;
};

const octocatImage = 'https://avatars.githubusercontent.com/u/583231?v=4';

const QueryResult = (props: QueryResultPropsType) => {
  const {query, navigateToUser} = props;
  const {data, isLoading} = useGetUserQuery(query);

  if (!isLoading && data) {
    const {avatar_url, login, html_url} = data;

    return (
      <UserContent onPress={() => navigateToUser(data)}>
        <Avatar uri={avatar_url} size={80} />
        <Info>
          <Name>{`@${login}`}</Name>
          <Repository>{html_url}</Repository>
        </Info>
      </UserContent>
    );
  } else if (isLoading) {
    return <Loader size="large" />;
  } else if (!isLoading && !data) {
    return (
      <EmptyContent>
        <OctocatImage source={{uri: octocatImage}} />
        <EmptyContentText>
          Nothing to show. Enter something in input, please
        </EmptyContentText>
      </EmptyContent>
    );
  } else {
    return null;
  }
};

export default QueryResult;

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
