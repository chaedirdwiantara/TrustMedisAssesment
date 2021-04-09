import React, {Component, useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Animated,
  Easing,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import {Fire, Size, Color} from '../../config';
import FastImage from 'react-native-fast-image';

const Home = props => {
  //search setup area

  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [buttonShowLess, setButtonShowLess] = useState(true);

  const searchFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.nama ? item.nama.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setSearch(text);
    } else {
      setfilterData(masterData);
      setSearch(text);
    }
  };

  //end of search setup area

  // const [dokter, setDokter] = useState([]);
  const [totalData, setTotalData] = useState(4);
  const getDokter = () => {
    Fire.database()
      .ref('dokter/')
      .once('value')
      .then(res => {
        console.log('category dokter: ', res.val());
        if (res.val()) {
          // setDokter(res.val());
          setfilterData(res.val());
          setmasterData(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  useEffect(() => {
    getDokter();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.search}
        value={search}
        placeholder="search here"
        underlineColorAndroid="transparent"
        onSubmitEditing={() => openFilter()}
        onChangeText={text => searchFilter(text)}
      />
      <View style={styles.wrapperAvatar}>
        {filterData?.slice(0, totalData).map((value, index) => {
          return (
            <TouchableOpacity
              style={styles.doctorContainer}
              key={index.toString()}
              onPress={() =>
                props.navigation.navigate('DetailDoctor', {value})
              }>
              <FastImage
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 200 / 2,
                  // marginRight: 15,
                }}
                source={{uri: value?.photo}}
              />
              <Text style={styles.dokterNameStyle}>Dr. {value?.nama}</Text>
              <Text style={styles.dokterBidangStyle}>{value?.bidang}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {buttonShowLess ? (
        <TouchableOpacity
          style={styles.btnLoadMore}
          onPress={() => {
            setTotalData(totalData + 6);
            setButtonShowLess(false);
          }}>
          <Text style={styles.btnTxt}>Load More</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.btnLoadLess}
          onPress={() => {
            setTotalData(totalData - 6);
            setButtonShowLess(true);
          }}>
          <Text style={styles.btnTxt}>Load Less</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  },
  wrapperAvatar: {
    paddingVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'red',
    justifyContent: 'space-around',
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
    backgroundColor: Color.tMedisBlue,
    padding: Size.h1,
    paddingHorizontal: Size.wp5,
    borderRadius: Size.ms4,
    marginTop: Size.wp7,
    marginRight: Size.wp3,
    marginBottom: Size.wp13,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnLoadLess: {
    backgroundColor: Color.tMedisGreen,
    padding: Size.h1,
    paddingHorizontal: Size.wp5,
    borderRadius: Size.ms4,
    marginTop: Size.wp7,
    marginRight: Size.wp3,
    marginBottom: Size.wp13,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: Size.ms16,
    textAlign: 'center',
  },
  doctorContainer: {
    // width: '100%',
    // flex: 1,
    alignItems: 'center',
    marginBottom: Size.ms20,
    // justifyContent: 'space-between',
  },
  search: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: Color.tMedisGreen,
    backgroundColor: 'white',
  },
  dokterNameStyle: {
    fontWeight: 'bold',
    fontSize: Size.ms15,
  },
  dokterBidangStyle: {
    color: Color.darkGrey,
  },
});
