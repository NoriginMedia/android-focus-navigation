import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MenuItem from './MenuItem';

const Menu = ({}) => {
  const [focus, setFocus] = useState(false);

  return (
    <View style={[styles.wrapper, focus ? styles.wrapperFocused : null]}>
      <View style={styles.circle} />
      <MenuItem setMenuFocus={setFocus} />
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
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    width: 100,
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    left: -200,
    transform: [{translateX: 200}],
  },
  wrapperFocused: {
    width: 200,
  },
  circle: {
    backgroundColor: '#808080',
    width: 50,
    height: 50,
    top: 30,
    left: '50%',
    transform: [{translateX: -25}],
    borderRadius: 30,
    marginBottom: 110,
  },
});

export default Menu;
