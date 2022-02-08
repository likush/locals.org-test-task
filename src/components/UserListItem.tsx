import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {UserResponseType} from '../features/api/apiSlice.js';

type UserListItemProps = {
  data: UserResponseType;
  onPress: (navigation: any) => void;
};

const UserListItem = (props: UserListItemProps) => {
  const {avatar_url, login, html_url} = props.data;
  const {onPress} = props;

  return (
    <ContainerButton onPress={onPress}>
      <Avatar source={{uri: avatar_url}} />
      <View>
        <Name>{login}</Name>
        <Repository>{html_url}</Repository>
      </View>
    </ContainerButton>
  );
};

export default UserListItem;

const ContainerButton = styled(TouchableOpacity)`
  flex: 1;
  background-color: white;
  padding: 16px 0;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled(Image)`
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border-radius: 50px;
`;

const Name = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`;

const Repository = styled(Text)``;
