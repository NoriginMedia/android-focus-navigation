import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MenuItem from './MenuItem';

const Menu = ({}) => {
  const [focus, setFocus] = useState(false);

  return (
    <View style={[styles.wrapper, focus ? styles.wrapperFocused : null]}>
      <MenuItem setMenuFocus={setFocus} />
      <MenuItem setMenuFocus={setFocus} />
      <MenuItem setMenuFocus={setFocus} />
      <MenuItem setMenuFocus={setFocus} />
      <MenuItem setMenuFocus={setFocus} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ccc',
    width: 50,
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: -1,
    borderRightColor: '#999',
    borderRightWidth: 5,
    opacity: 0.1,

    left: -200,
    transform: [{translateX: 200}],
  },
  wrapperFocused: {
    opacity: 1,
    zIndex: 1,
    width: 250,
  },
});

export default Menu;
