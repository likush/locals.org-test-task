import React from 'react';
import {View, Image} from 'react-native';
import styled from 'styled-components';

type AvatarPropsType = {
  uri: string;
  size: number;
};

const Avatar = (props: AvatarPropsType) => {
  const {size, uri} = props;
  const borderRadius = size / 2;

  return (
    <View>
      <StyledImage
        source={{uri}}
        width={size}
        height={size}
        borderRadius={borderRadius}
      />
    </View>
  );
};

export default Avatar;

const StyledImage = styled(Image)`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: ${props => props.borderRadius}px;
`;
