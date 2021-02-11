import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

const GalleryItem = ({title, image, hasTVPreferredFocus}) => {
  const [focus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  return (
    <TouchableHighlight
      onFocus={onFocus}
      onBlur={onBlur}
      hasTVPreferredFocus={hasTVPreferredFocus}
      style={[styles.wrapper, focus ? styles.wrapperFocused : null]}>
      <View>
        <Image style={styles.image} source={image} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'transparent',
    borderWidth: 5,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  wrapperFocused: {
    borderColor: 'rgb(232, 65, 175)',
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
  },
  text: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GalleryItem;
