import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTogglePasswordVisibility} from './useTogglePasswordVisibility';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

const Login = props => {
  //api call

  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const [password, setPassword] = useState('');
  const [contactNo, setcontectNO] = useState('');
  const [errors, setErrors] = useState({});
  const [value, setValue] = useState('Login');
  const [load, setLoad] = useState(false);
  const [color, setColor] = useState(['#88d840', '#75C31E', '#4c9a2a']);
  // const[login,setLogin] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const sendCred = async props => {
 
    if (contactNo.length !== 10) {
      Alert.alert('please enter valid contactNo');
      // <Text>hello</Text>
      // return Alert.alert(data.message)
    } else if (password.length == 0) {
      Alert.alert('password is must be required');
      // <Text>hello</Text>
    } else {
      setLoad(true)
      setValue("")
      setColor(['#D3D3D3','#D3D3D3','#ccc'])
    fetch('http://192.168.1.209:3000/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contactNo: contactNo,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(async data => {
        try {
       
            setIsLoading(true);
            await AsyncStorage.setItem('token', data.token);
            props.navigation.replace('Drawer1');
          
        } catch (error) {
          Alert.alert('please enter valid phone or password');
          setLoad(false)
      setValue("Login")
      setColor(['#88d840', '#75C31E', '#4c9a2a'])
        }
      })
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <LottieView
        style={{marginTop: -220}}
        source={require('../images/lf30_editor_eafbixfm.json')}
        size={10}
        autoPlay
        loop
      />

      <View>
        <View style={styles.login}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'bold',
              color: 'white',
              marginTop: 25,
            }}>
            Sign In
          </Text>
        </View>
        <KeyboardAvoidingView behavior="height" keyboardVerticalOffset="2">
          <View style={styles.container1}>
            <View style={styles.text}>
              <Text style={{fontSize: 25, fontFamily: 'bold' ,color:'black'}}>welcome!</Text>
            </View>

            <View style={styles.input}>
              <MaterialIcons
                name="call"
                type="MaterialIcons"
                size={25}
                color="#75C31E"
              />

              <TextInput
                placeholder="Phone:"
                onChangeText={text => setcontectNO(text)}
                placeholderTextColor="black"
                returnKeyType="next"
                color="black"
                maxLength={10}
                keyboardType="number-pad"
              />
            </View>

            <View style={styles.inputt}>
              <MaterialIcons
                name="lock"
                type="MaterialIcons"
                size={25}
                color="#75C31E"
              />
              <TextInput
                name="password"
                placeholder="Password:"
                color="black"
                returnKeyType="done"
                placeholderTextColor="black"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry={passwordVisibility}
                value={password}
                enablesReturnKeyAutomatically
                onChangeText={text => setPassword(text)}
                style={{width: 220}}
              />
              <Pressable onPress={handlePasswordVisibility}>
                <FontAwesome
                  name={rightIcon}
                  type="FontAwesome"
                  size={25}
                  color="#75C31E"
                  style={{marginRight: '80%'}}
                />
              </Pressable>
            </View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Forget');
              }}>
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 60,
                  marginTop: 20,
                  color: '#75C31E',
                }}>
                Forget Password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => sendCred(props)} disabled={ load ? true : false}>
              <View style={{height: 50}}>
                <LinearGradient
                  colors={color}
                  style={styles.btn}
                  >
                     <Image display={load ? 'flex' : 'none'} style={{height: 40, width: 40,marginTop:2}} resizeMode='contain' source={require('../images/load1.gif')} />
                  <Text
                    style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
                    {value}
                  </Text>
                </LinearGradient>
              </View>
            </TouchableOpacity>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.replace('Register');
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 60,
                    marginRight: 60,
                    marginTop: 35,
                    color: '#75C31E',
                  }}>
                  Don't have account ?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.replace('Drawer');
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    marginRight: 60,
                    marginLeft: 30,
                    color: 'grey',
                    marginTop: 36,
                  
                  }}>
                  Skip
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#75C31E',
  },
  container1: {
    backgroundColor: 'white',
    height: '100%',
    borderTopLeftRadius: 60,
    // borderTopRightRadius:40,
    marginTop: '85%',
  },
  input: {
    borderColor: 'black',
    borderBottomWidth: 1,
    width: '70%',
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  inputt: {
    borderColor: 'black',
    width: '70%',
    borderBottomWidth: 1,
    alignSelf: 'center',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginTop: 40,
    marginLeft: 60,
  },
  btn: {
    // flex: 1,
    height: '90%',
    borderRadius: 10,
    marginTop: 25,
    // marginBottom: -20,
    // marginLeft: 60,
    // marginRight: 60,
    width: '70%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  login: {
    marginBottom: -300,
    marginTop: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;

// {login ? (
//   <ActivityIndicator color="white"/>
// ) : (
//   <>
//   </>
// )}
