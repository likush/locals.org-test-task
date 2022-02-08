import React, {useState} from 'react';
import {View} from 'react-native';
import {useDebounce} from 'use-debounce';
import styled from 'styled-components';
import Input from '../../components/Input';
import QueryResult from '../../components/QueryResults';

const HomeScreen = (props: any) => {
  const {navigation} = props;

  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 1000);

  const navigateToUser = (userData: any) =>
    navigation.navigate('User', userData);

  return (
    <Container>
      <Input onChange={nextQuery => setQuery(nextQuery)} value={query} />
      <QueryResult query={debouncedQuery} navigateToUser={navigateToUser} />
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
