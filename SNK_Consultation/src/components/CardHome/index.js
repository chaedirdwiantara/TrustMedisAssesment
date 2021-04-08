import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const CardHome = ({id, dokterKey, photo, nama}) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('DetailDoctor')}>
      <Image
        style={{width: 100, height: 100, borderRadius: 200 / 2}}
        source={{uri: dokterKey.photo}}
      />
      <Text>{dokterKey.nama}</Text>
    </TouchableOpacity>
  );
};

export default CardHome;

const styles = StyleSheet.create({});
