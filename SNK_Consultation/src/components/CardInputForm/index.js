import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

const CardInputForm = ({
  label,
  placeholder,
  keyboardType,
  isTextArea,
  onChangeText,
  namaState,
  value,
}) => {
  if (isTextArea) {
    return (
      <>
        {/* <Text style={styles.label}>{label} :</Text> */}
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder={placeholder}
          style={styles.textInputArea}
          keyboardType={keyboardType}
          value={value}
          onChangeText={text => onChangeText(namaState, text)}
        />
      </>
    );
  }

  return (
    <>
      {/* <Text style={styles.label}>{label} :</Text> */}
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        keyboardType={keyboardType}
        value={value}
        onChangeText={text => onChangeText(namaState, text)}
      />
    </>
  );
};

export default CardInputForm;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  textInputArea: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 5,
  },
});
