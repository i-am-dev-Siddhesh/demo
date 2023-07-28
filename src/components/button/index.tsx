import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

interface IProp {
  title: string;
  onPress: () => void;
}

export default function CustomButton({title, onPress}: IProp) {
  return (
    <TouchableOpacity style={{width: '100%'}} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#1DBDEC',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    textTransform: 'uppercase',
  },
});
