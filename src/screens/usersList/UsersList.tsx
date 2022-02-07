import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import Input from '../../features/input/Input';

const UsersList = (props: {navigation: any}) => {
  const {navigation} = props;

  const onPress = () => {
    navigation.navigate('User');
  };

  return (
    <SafeAreaView>
      <Text>Title</Text>
      <Input />

      <Button title="Go to the next screen" onPress={onPress} />
    </SafeAreaView>
  );
};

export default UsersList;
