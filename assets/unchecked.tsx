import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export default function Checked() {
  return (
    <View>
      <Svg width={20} height={20} viewBox='0 0 20 20'>
        <Circle cx='10' cy='10' r='9.25' stroke='black' stroke-width='1.5' />
      </Svg>
    </View>
  );
}
