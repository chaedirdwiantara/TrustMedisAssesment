import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {CardInputForm} from '../../components';
import {Size} from '../../config';

const AddDoctor = () => {
  return (
    <View style={styles.pages}>
      <Text style={styles.label}>Nama :</Text>
      <CardInputForm placeholder="Masukkan Nama" style={styles.textInput} />
      <Text style={styles.label}>Bidang :</Text>
      <CardInputForm
        placeholder="Masukkan bidang dokter"
        style={styles.textInput}
      />
      <Text style={styles.label}>Deskripsi :</Text>
      <CardInputForm
        placeholder="Masukkan deskripsi dokter"
        style={styles.textInput}
        isTextArea={true}
      />
    </View>
  );
};

export default AddDoctor;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  label: {
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
  },
});
