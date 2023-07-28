import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'; // Import the desired icon library


interface IProps {
  inputValue: any;
  placeholder: string;
  label: string;
  error?: string;
  name: string;
  iconName: string;
  keyboardType?: string;
  secureTextEntry ?: boolean;
  placeholderTextColor?: string;
  handleChange?: (val: string, name: string) => void;
  onPressIn?: () => void;
}

const CustomInput = ({
  inputValue,
  placeholder,
  label,
  name,
  handleChange,
  onPressIn,
  placeholderTextColor = '#000',
  iconName,
  secureTextEntry = false
}: IProps) => {
  const onChangeText = (val: string) => {
    handleChange && handleChange(val, name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <AntDesign name={iconName} size={16} style={styles.icon} />
        <TextInput
          style={styles.input}
          value={inputValue.toString()}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onPressIn={onPressIn}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: 5,
    
  },
  label: {
    width: '100%',
    fontWeight: '400',
    fontSize: 16,
    color: "#000",
    alignSelf:'flex-start',
    marginLeft:5
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "gray",
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  icon: {
    marginRight: 5,
    color: "gray",
  },
  input: {
    flex: 1,
    padding: 7,
    color: '#000',
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default CustomInput;
