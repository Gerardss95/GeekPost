import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const usePasswordToggle = () => {
  const [visible, setVisibility] = useState(false);
  const InputType: any = visible ? false : true;
  const Icon = visible ? (
    <TouchableOpacity onPress={() => setVisibility(visibility => !visibility)}>
      <Entypo
        name='eye-with-line'
        size={16}
        color='black'
      />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => setVisibility(visibility => !visibility)}>
      <Entypo
        name='eye'
        size={16}
        color='#AAABAE'
      />
    </TouchableOpacity>
  );
  return [InputType, Icon];
};

export default usePasswordToggle;
