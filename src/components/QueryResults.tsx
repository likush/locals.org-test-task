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
import {UserType} from '../../types';

type QueryResultPropsType = {
  navigateToUser: (user: UserType) => void;
  query: string;
};

const octocatImage = 'https://avatars.githubusercontent.com/u/583231?v=4';

const QueryResult = (props: QueryResultPropsType) => {
  const {query, navigateToUser} = props;
  const {data, isLoading, isUninitialized, isError} = useGetUserQuery(query, {
    skip: query.length === 0,
  });

  if (isLoading) {
    return <Loader size="large" />;
  } else if (isError) {
    return (
      <WarningContent>
        <WarningText>Something went wrong</WarningText>
      </WarningContent>
    );
  } else if (isUninitialized || !data) {
    return (
      <WarningContent>
        <OctocatImage source={{uri: octocatImage}} />
        <WarningText>
          Nothing to show. Enter something in input, please
        </WarningText>
      </WarningContent>
    );
  } else if (data) {
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

const WarningContent = styled(View)`
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

const WarningText = styled(Text)`
  color: #606060;
`;
