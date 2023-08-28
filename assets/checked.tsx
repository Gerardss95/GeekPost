import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

export default function Checked() {
  return (
    <View>
      <Svg width={20} height={20} viewBox='0 0 20 20'>
        <Circle cx='10' cy='10' r='10' fill='black' />
        <Path d='M5.5 9.5L9 13L14.5 7.5' stroke='white' stroke-width='1.5' />
      </Svg>
    </View>
  );
}
