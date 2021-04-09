import React, {Component, useState, useCallback} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Size} from '../../config';
import {Color} from '../../config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DetailDoctor = props => {
  console.log(props, 'ini datanya loh');
  const dataDokter = props.route.params.value;

  //WHATSAPP SETUP AREA

  const mobile_no = '085256585516';
  const msg = `Hi, I’d like to make an appointment for dr. ${dataDokter.nama} today`;

  // const [mobile_no, setMobile_no] = useState('');
  // const [msg, setMSG] = useState('');
  const sendOnWhatsApp = () => {
    if (mobile_no) {
      if (msg) {
        // Kode negara 62 = Indonesia
        let url = 'whatsapp://send?text=' + msg + '&phone=62' + mobile_no;
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened');
          })
          .catch(() => {
            alert('Make sure Whatsapp installed on your device');
          });
      } else {
        alert('Please insert message to send');
      }
    } else {
      alert('Please insert mobile no');
    }
  };
  //END OF WHATSAPP SETUP AREA

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{uri: dataDokter.photo}}
          style={{width: '100%', height: 350}}
        />
      </View>
      <View style={styles.descWrapper}>
        <View style={styles.docNameWrapper}>
          <Text style={styles.dokterName}>Dr. {dataDokter.nama}</Text>
          <Text style={styles.dokterBidang}>{dataDokter.bidang}</Text>
        </View>
        <View style={styles.docMoreDesc}>
          <View style={styles.locationWrapper}>
            <Ionicons name="md-book" size={21} style={styles.iconStyle} />
            <Text style={styles.locationStyle}>Lulusan Dari</Text>
          </View>
          <Text style={styles.dokterbLocation}>{dataDokter.lulusan}</Text>
          <View style={styles.locationWrapper}>
            <FontAwesome5
              name="hospital-alt"
              size={21}
              style={styles.iconStyle}
            />
            <Text style={styles.locationStyle}>Tempat Praktik</Text>
          </View>
          <Text style={styles.dokterbLocation}>{dataDokter.location}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() => {
          sendOnWhatsApp();
        }}>
        <Text style={styles.textStyle2}>Make Appoinment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  descWrapper: {
    paddingHorizontal: Size.wp4,
    paddingVertical: Size.wp3,
    marginHorizontal: Size.wp6,
    marginVertical: Size.wp5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  submitBtn: {
    backgroundColor: 'skyblue',
    padding: Size.h1,
    paddingHorizontal: Size.wp5,
    borderRadius: Size.ms4,
    marginTop: Size.wp5,
    marginRight: Size.wp3,
    marginBottom: Size.wp13,
    color: Color.darkblue,
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
  textStyle2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: Size.ms16,
    textAlign: 'center',
  },
  docNameWrapper: {
    paddingTop: Size.ms11,
    paddingBottom: Size.ms20,
    marginBottom: Size.ms20,
    borderBottomWidth: 1,
    borderColor: Color.silver,
    alignItems: 'center',
  },
  dokterName: {
    fontWeight: 'bold',
    fontSize: Size.ms18,
    color: Color.moreDarGrey,
  },
  dokterBidang: {
    // fontWeight: 'bold',
    fontSize: Size.ms16,
    color: Color.darkGrey,
  },
  locationWrapper: {
    flexDirection: 'row',
  },
  locationStyle: {
    fontSize: Size.ms17,
    color: Color.moreDarGrey,
  },
  docMoreDesc: {
    paddingLeft: Size.wp7,
  },
  iconStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: Color.darkGrey,
    marginRight: Size.ms12,
  },
  dokterbLocation: {
    paddingVertical: Size.ms11,
    fontSize: Size.ms16,
    color: Color.darkGrey,
    paddingLeft: Size.ms33,
  },
});
