import React, {useState} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTogglePasswordVisibility} from './useTogglePasswordVisibility';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Reset = ({route, navigation}) => {
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const contactNo = route.params.Phone;
  const sendCred = async navigation => {
    fetch('http://evspoint.com/api/user/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contactNo: contactNo,
        password: password,
        confirmPassword: ConfirmPassword,
      }),
    })
      .then(res => res.json())
      .then(async data => {
        try {
          navigation.push('HomeScreen');
        } catch (error) {
          Alert.alert('please enter valid phone or password');
        }
      });
  };


  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();


  return (
    <View style={styles.container}>
      <StatusBar hidden />


      <Image style={styles.Image} source={require('../images/logo.png')} />


      <View style={styles.text}>
        <Text style={{fontSize: 30, fontFamily: 'bold', color: 'white'}}>
          Reset Password
        </Text>
      </View>


      <View style={styles.container1}>
        <View style={styles.text5}>
          <Text style={{fontSize: 25, fontFamily: 'bold', color: '#454545'}}>
            Set Password
          </Text>
        </View>


        <View style={styles.input1}>
          <MaterialIcons
            name="lock"
            type="MaterialIcons"
            size={25}
            color="#75C31E"
            style={{marginTop: 10}}
          />
          <TextInput
            placeholder="New Password"
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            color="black"
          />
        </View>


        <View style={styles.input2}>
          <MaterialIcons
            name="lock"
            type="MaterialIcons"
            size={25}
            color="#75C31E"
            style={{marginTop: 10}}
          />
          <TextInput
            placeholder="Confirm Password"
            onChangeText={text => setConfirmPassword(text)}
            secureTextEntry={passwordVisibility}
            color="black"
          />
          <Pressable onPress={handlePasswordVisibility}>
            <FontAwesome
              name={rightIcon}
              type="FontAwesome"
              size={25}
              color="#75C31E"
              style={{marginLeft: '50%', marginTop: 9}}
            />
          </Pressable>
        </View>
        <View style={{height: 50}}>
          <TouchableOpacity
            style={[
              styles.btn,
              {
                backgroundColor: '#75C31E',
              },
            ]}
            onPress={() => sendCred(navigation)}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text5: {
    marginTop: 40,
    marginLeft: 40,
  },
  Image: {
    width: 220,
    height: 60,
    alignSelf: 'center',
    marginTop: 90,
  },
  container: {
    flex: 1,
    backgroundColor: '#75C31E',
  },
  container1: {
    backgroundColor: 'white',
    height: '100%',
    borderTopLeftRadius: 40,
    marginTop: '25%',
  },
  text: {
    marginTop: 20,
    alignSelf: 'center',
  },
  btn: {
    height: '100%',
    width: '80%',
    borderRadius: 10,
    marginTop: 120,
    alignSelf: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input1: {
    borderColor: 'black',
    borderBottomWidth: 1,
    marginTop: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    width: '80%',
  },
  input2: {
    borderColor: 'black',
    borderBottomWidth: 1,
    alignSelf: 'center',
    marginTop: 20,
    width: '80%',
    flexDirection: 'row',
  },
});


export default Reset;