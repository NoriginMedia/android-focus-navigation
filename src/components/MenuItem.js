import React, {useState, useCallback} from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';

const MenuItem = ({setMenuFocus}) => {
  const [focus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
    setMenuFocus(true);
  }, [setMenuFocus]);

  const onBlur = useCallback(() => {
    setFocus(false);
    setMenuFocus(false);
  }, [setMenuFocus]);

  return (
    <TouchableHighlight
      onFocus={onFocus}
      onBlur={onBlur}
      style={[styles.item, focus ? styles.itemFocused : null]}>
      <View />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#333',
    width: '100%',
    height: 100,
    top: 100,
    left: 0,
    marginVertical: 10,
  },
  itemFocused: {
    backgroundColor: 'rgb(232, 65, 175)',
  },
});

export default MenuItem;
