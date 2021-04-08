import React, {Component, useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Animated,
  Easing,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {navigate} from '../../utils/Nav';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fire, Size, Color} from '../../config';
import {CardHome} from '../../components/';

const Home = props => {
  const [dokter, setDokter] = useState([]);
  const getDokter = () => {
    Fire.database()
      .ref('dokter/')
      .once('value')
      .then(res => {
        console.log('category dokter: ', res.val());
        if (res.val()) {
          setDokter(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  useEffect(() => {
    getDokter();
  }, []);

  //SEARCH AREA
  const screenWidth = Dimensions.get('screen').width;
  const translateSearchBar = React.useRef(new Animated.Value(-100)).current;
  const opacitySearchBar = React.useRef(new Animated.Value(0)).current;
  const [searchValue, setSearchValue] = useState('');

  const displaySearchBar = () => {
    Animated.timing(translateSearchBar, {
      toValue: 0,
      easing: Easing.linear(),
      duration: 700,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacitySearchBar, {
      toValue: 1,
      easing: Easing.linear(),
      duration: 700,
      useNativeDriver: true,
    }).start();
  };

  const hideSearchBar = () => {
    Animated.timing(translateSearchBar, {
      toValue: -100,
      easing: Easing.linear(),
      duration: 700,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacitySearchBar, {
      toValue: 0,
      easing: Easing.linear(),
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const gotoSearchScreen = () => {
    navigate('SearchScreen', {searchValue});
  };
  //END OF SEARCH AREA

  return (
    <>
      {/* search area */}
      <View style={styles.header}>
        {/* <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingRight: 10,
          }}
          onPress={displaySearchBar}>
          <Fontisto name="search" size={25} style={styles.textStyle} />
        </TouchableOpacity>
        <Animated.View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 74,
            alignContent: 'center',
            transform: [{translateY: translateSearchBar}],
          }}>
          <TextInput
            placeholder={'search'}
            onSubmitEditing={() => gotoSearchScreen()}
            onChangeText={value => setSearchValue(value)}></TextInput>
          <TouchableOpacity onPress={hideSearchBar}>
            <Ionicons name="close" size={30} style={styles.textStyle} />
          </TouchableOpacity>
        </Animated.View> */}
      </View>
      {/* end of search area */}
      <View style={styles.page}>
        <View style={styles.wrapperAvatar}>
          {dokter.length > 0 ? (
            dokter.map(key => (
              <TouchableOpacity
                style={styles.doctorContainer}
                onPress={() => props.navigation.navigate('DetailDoctor')}>
                <Image
                  style={{width: 100, height: 100, borderRadius: 200 / 2}}
                  source={{uri: key.photo}}
                />
                <Text>{key.nama}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text>Daftar Kosong</Text>
          )}
        </View>
        <TouchableOpacity style={styles.btnLoadMore}>
          <Text style={styles.btnTxt}>Load More</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  listKontak: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: Size.h10,
    width: '100%',
    elevation: 8,
    justifyContent: 'space-between',
    // alignItems: 'flex-end',
  },
  wrapperAvatar: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 30,
    backgroundColor: 'skyblue',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  wrapperButton: {
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
  btnLoadMore: {
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
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: Size.ms16,
    textAlign: 'center',
  },
  doctorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
