import React from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import {
  faBuilding,
  faLink,
  faComment,
  faGlobe,
  faCodeBranch,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {RouteProp} from '@react-navigation/native';
import styled from 'styled-components';
import Avatar from '../../components/Avatar';

type UserScreenPropsType = {
  navigation: any;
  route: RouteProp<any>;
};

const renderInfoItem = (title: string, data: string, icon: IconDefinition) => {
  if (data) {
    return (
      <InfoContent>
        <Icon icon={icon} size={12} />
        <InfoText>{data}</InfoText>
      </InfoContent>
    );
  }
};

const renderInfoLink = (title: string, url: string, icon: IconDefinition) => {
  if (url) {
    return (
      <InfoContent>
        <Icon icon={icon} size={12} />
        <TouchableOpacity onPress={() => handlePress(url)}>
          <Text>{url}</Text>
        </TouchableOpacity>
      </InfoContent>
    );
  }
};

const handlePress = (url: string) => {
  return Linking.openURL(url);
};

const UserScreen = (props: UserScreenPropsType) => {
  const user = props.route?.params?.user;

  const {
    avatar_url,
    name,
    login,
    html_url,
    company,
    location,
    bio,
    blog,
    public_repos,
  } = user;
  const loginText = `@${login}`;

  return (
    <Container>
      <RowContent>
        <Avatar uri={avatar_url} size={80} />
        <NameContent>
          <Name>{name}</Name>
          <Login>{loginText}</Login>
        </NameContent>
      </RowContent>
      <Content>
        {renderInfoItem('Bio', bio, faComment)}
        {renderInfoItem('Company', company, faBuilding)}
        {renderInfoLink('Location', location, faGlobe)}
        {renderInfoLink('Blog', blog, faLink)}
        {renderInfoLink('GitHub', html_url, faCodeBranch)}
        <Text>{`Repositories: ${public_repos}`}</Text>
      </Content>
    </Container>
  );
};

export default UserScreen;

const Container = styled(View)`
  background-color: white;
  height: 100%;
  padding: 20px 16px 0;
`;

const RowContent = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const NameContent = styled(View)`
  margin-left: 16px;
`;

const Name = styled(Text)`
  margin: 8px 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const Login = styled(Text)`
  font-size: 12px;
  color: #606060;
`;

const Content = styled(View)`
  margin-top: 20px;
`;

const InfoContent = styled(RowContent)`
  margin-bottom: 12px;
`;

const InfoText = styled(Text)`
  flex: 1;
  flex-wrap: wrap;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #202020;
  margin-right: 8px;
`;
