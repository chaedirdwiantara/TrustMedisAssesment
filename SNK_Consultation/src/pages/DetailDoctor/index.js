import React, {Component, useState, useCallback} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Size} from '../../config';
import {Color} from '../../config';

const DetailDoctor = () => {
  // bottom read area
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);
  // end of bottom read area

  return (
    <View>
      <View>
        <Image
          source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={{width: 400, height: 400}}
        />
      </View>
      <View style={styles.textContainer}>
        <Text
          onTextLayout={onTextLayout}
          numberOfLines={textShown ? undefined : 5}
          style={styles.courseDetilTxt}>
          Many of the images you will display in your app will not be available
          at compile time, or you will want to load some dynamically to keep the
          binary size down. Unlike with static resources, you will need to
          manually specify the dimensions of your image. It's highly recommended
          that you use https as well in order to satisfy App Transport Security
          requirements on iOS.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() => {
          // filterCourseByCategoryID(item._id);
        }}>
        <Text style={styles.textStyle2}>Make Appoinment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailDoctor;

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: Size.wp3,
    paddingVertical: Size.wp3,
    marginHorizontal: Size.wp6,
    marginVertical: Size.wp5,
    backgroundColor: 'silver',
    // height: Size.h17,
  },
  submitBtn: {
    backgroundColor: 'skyblue',
    padding: Size.h1,
    paddingHorizontal: Size.wp5,
    borderRadius: Size.ms4,
    marginTop: Size.wp7,
    marginRight: Size.wp3,
    marginBottom: Size.wp13,
    color: Color.darkblue,
    elevation: 2,
    alignSelf: 'center',
  },
  textStyle2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: Size.ms16,
    textAlign: 'center',
  },
});
