import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Alert,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Register = props => {
  //  <Toast ref={(ref)=>{Toast.setRef(ref)}}/>

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [contactNo, setcontactNo] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const sendCred = async props => {
    fetch('http://localhost:3000/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        contactNo: contactNo,
        password: password,
        confirmPassword: confirmPassword,
      }),
    })
      .then(res => res.json())
      .then(async data => {
        try {
          if (contactNo.length !== 10) {
            Alert.alert('please enter valid contactNo');
          } else if (password.length == 0) {
            Alert.alert('password is must be required');
          } else {
            await AsyncStorage.setItem('token', data.token);
            props.navigation.replace('Drawer1');
          }
        } catch (e) {
          console.log(e);
        }
      });
  };
  return (
    <KeyboardAvoidingView>
      <View>
        <StatusBar hidden />

        <ImageBackground
          source={require('../images/register1.png')}
          style={styles.ImageBackground}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  fontSize: 30,
                  color: '#404040',
                  marginTop: '10%',
                  marginLeft: '13%',
                  marginBottom: '1%',
                }}>
                Register
              </Text>
              <Text style={{color: '#404040', marginLeft: '13%'}}>
                It is a long established fact that{' '}
              </Text>
              <Text style={{color: '#404040', marginLeft: '13%'}}>
                a reader will be distracted.
              </Text>
            </View>
            <Image style={styles.Image} source={require('../images/12.png')} />
          </View>
          <Toast
            ref={ref => {
              Toast.setRef(ref);
            }}
          />
          <View style={styles.container}>
            <View style={styles.input}>
              <MaterialIcons
                name="person"
                type="MaterialIcons"
                size={25}
                color="#75C31E"
              />

              <TextInput
                placeholder="FirstName:"
                placeholderTextColor="black"
                onChangeText={text => setfirstName(text)}
                returnKeyType="next"
                color="black"
                keyboardType="name-phone-pad"
              />
            </View>
            <View style={styles.input1}>
              <MaterialIcons
                name="person"
                type="MaterialIcons"
                size={25}
                color="#75C31E"
              />

              <TextInput
                placeholder="LastName:"
                placeholderTextColor="black"
                onChangeText={text => setlastName(text)}
                returnKeyType="next"
                color="black"
                keyboardType="name-phone-pad"
              />
            </View>
            <View style={styles.input1}>
              <MaterialIcons
                name="mail"
                type="MaterialIcons"
                size={25}
                color="#75C31E"
              />

              <TextInput
                placeholder="Email:"
                placeholderTextColor="black"
                onChangeText={text => setemail(text)}
                returnKeyType="next"
                color="black"
              />
            </View>
            <View style={styles.input1}>
              <MaterialIcons
                name="phone"
                type="MaterialIcons"
                size={25}
                color="#75C31E"
              />

              <TextInput
                placeholder="ContactNo:"
                placeholderTextColor="black"
                onChangeText={text => setcontactNo(text)}
                returnKeyType="next"
                color="black"
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.input1}>
              <MaterialIcons
                name="lock"
                type="MaterialIcons"
                size={25}
                color="#75C31E"
              />

              <TextInput
                placeholder="Password:"
                placeholderTextColor="black"
                onChangeText={text => setpassword(text)}
                returnKeyType="next"
                color="black"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.input1}>
              <MaterialIcons
                name="lock"
                type="MaterialIcons"
                size={25}
                color="#75C31E"
              />

              <TextInput
                placeholder="Confirm Password:"
                placeholderTextColor="black"
                onChangeText={text => setconfirmPassword(text)}
                returnKeyType="next"
                color="black"
                secureTextEntry={true}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => sendCred(props)}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                color: '#203030',
                fontSize: 20,
                marginTop: 13,
              }}>
              REGISTER NOW
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}
            onPress={() => {
              props.navigation.replace('HomeScreen');
            }}>
            <Text style={{color: 'white', fontSize: 13}}>
              Aleready have an Account ? Login
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    height: '100%',
    width: '100%',
  },
  container: {
    height: '65%',
    marginTop: '5%',
    width: '85%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    elevation: 10,
  },
  input: {
    borderColor: 'black',
    width: '80%',
    borderBottomWidth: 1,
    marginLeft: '10%',
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input1: {
    borderColor: 'black',
    width: wp('68%'),
    borderBottomWidth: 1,
    marginLeft: '10%',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Image: {
    width: 140,
    height: 140,
  },
  btn: {
    height: 55,
    width: wp('85%'),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    elevation: 10,
    marginTop: 15,
  },
});
export default Register;
