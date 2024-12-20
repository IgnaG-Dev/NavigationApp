import React from 'react';
import {Text, View} from 'react-native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';
import { Ioicon } from '../../components/shared/Ioicon';

export const Tab1Screen = () => {

  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>
      <Ioicon name="rocket-outline" />
    </View>
  );
};
