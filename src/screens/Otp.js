import React, {useState,useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  BackHandler,
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
const otp = ({route, navigation}) => {
  function handleBackButtonClick() {
    navigation.navigate('Forget');
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const Phone = route.params.MobileNo;
  const DB_Phone = '+91'+Phone;
  const [otp, setOtp] = useState();
  //  const otp = 6908;
  const otp1 = parseInt(otp)
  const sendCred = async navigation => {


    if (otp.length == 0) {
      Alert.alert('password is must be required');
    } else {
    fetch('http://evspoint.com/api/VerifyOtp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Phone: DB_Phone,
        otp: otp1,
      }),
    })
      .then(res => res.json())
      .then(async data => {
        try {
          console.log(JSON.stringify({
            Phone: Phone,
            otp: otp,
          }))
          console.log(Phone);
          console.log(otp);
          console.log(data);
          console.log(data.right);
          await AsyncStorage.setItem('Right', data.right);
          navigation.push('Reset', {Phone});
        } catch (error) {
          Alert.alert('Enter valid OTP');
        }
      });
    }
    //for loading activityindecator
  };


  <OTPInputView pinCount={4}></OTPInputView>;
  return (
    <View>
      <StatusBar hidden />
      <View style={{backgroundColor: '#75C31E', marginBottom: 100}}>
        <TouchableOpacity onPress={() => navigation.push('Forget')}>
          <MaterialIcons
            name="reply"
            type="MaterialIcons"
            size={35}
            color="white"
            style={{marginTop: 10}}
          />
        </TouchableOpacity>


        <View
          style={{
            alignSelf: 'center',
            flex: 1,
            marginTop: 60,
            marginBottom: -60,
          }}>
          <Image
            style={{width: 100, height: 100, resizeMode: 'contain'}}
            source={require('../images/otp.png')}
          />
        </View>


        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 180,
            marginBottom: -180,
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>OTP</Text>
        </View>


        <View
          style={{
            backgroundColor: 'white',
            marginTop: 240,
            borderTopLeftRadius: 40,


            height: '100%',
          }}>
          <View style={{marginTop: 45}}>
            <Text style={{fontSize: 25, color: 'black', alignSelf: 'center'}}>
              Verification Code!
            </Text>
             <Text style={{alignSelf: 'center', marginTop:20, color:'grey'}}>We have sent OTP on your mobile </Text>
             <Text style={{alignSelf: 'center',color:'grey'}}>number<Text style={{color:'black'}}> "{Phone}"</Text></Text>
          </View>


          <View style={{flexDirection: 'row', marginTop: 60}}>
            <View style={{flex: 1}}>
              <OTPInputView
                style={{width: '70%', height: 30, alignSelf: 'center'}}
                pinCount={4}
                onCodeFilled={otp => {
                  setOtp(otp);
                }}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                // onCodeFilled={otp => {
                //   console.log(Code is ${otp}, you are good to go!);
                // }}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 15,
              color: 'grey',
              marginTop: 40,
              alignSelf: 'center',
            }}>
            Dont recieve an otp ?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 13,
                color: '#75C31E',
                marginTop: 5,
                alignSelf: 'center',
              }}>
              Resend OTP
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => sendCred(navigation)}
            style={styles.SubmitButtonStyle}>
            <Text style={styles.TextStyle}> SUBMIT </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  input: {
    backgroundColor: '#faf0e6',
    borderWidth: 2,
    borderColor: '#75C31E',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 12,
    height: 35,
    width: 35,
  },
  SubmitButtonStyle: {
    marginTop: 50,
    paddingTop: 15,
    paddingBottom: 15,
    height: 50,
    width: 330,
    backgroundColor: '#75C31E',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    alignSelf: 'center',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },


  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },


  underlineStyleBase: {
    width: 55,
    height: 55,
    borderWidth: 2,
    borderColor: '#75c31e',
    borderRadius: 7,
  },


  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
export default otp;