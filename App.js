import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  View,
  ActivityIndicator,
  StatusBar,
  Image,
  Dimensions,
  StyleSheet,
  DrawerLayoutAndroid,
} from 'react-native';

import {EventRegister} from 'react-native-event-listeners';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Register from './src/screens/Register';
import Forget from './src/screens/Forget';
import Otp from './src/screens/Otp';
import Reset from './src/screens/Reset';
import LoadingScreen from './src/screens/LoadingScreen';
import profile from './src/screens/Profile';
import Services from './src/screens/Services';
import help from './src/screens/help';
import history from './src/screens/history';
import Drawer1 from './src/screens/Drawer1';
import StationList from './src/screens/stationList';
import StationDetails from './src/screens/stationDetails';
import Booking from './src/screens/booking';
import Success from './src/screens/Success';
import Payment from './src/screens/Payment';
import Historydetails from './src/screens/Historydetails';
import Location from './src/screens/Location';
import LottieView from 'lottie-react-native';
import Schedule from './src/screens/Schedual';
import petrolpump from './src/screens/petrolpump';
import practice from './src/screens/practice';
import ChangeSchedual from './src/screens/ChangeSchedual'
//skipping
import Drawer from './src/Skip/Drawer';
import stationList1 from './src/Skip/stationList1';
import history1 from './src/Skip/history1';
import StationDetails1 from './src/Skip/stationDetails1';
import help1 from './src/Skip/help1';

const Stack = createStackNavigator();
const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

function splashScreen({navigation}) {
  setTimeout(async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      navigation.replace('Drawer1');
    } else {
      navigation.replace('OnboardingScreen');
    }
  }, 3000);
  return (
    <View>
      <StatusBar hidden />
      <ImageBackground
        source={require('./src/images/abc.png')}
        style={{width: '100%', height: '100%'}}>
        <LottieView
          style={{marginTop: -50}}
          source={require('./src/images/lf30_editor_lrlz6w5b.json')}
          size={100}
          autoPlay
          loop
        />
      </ImageBackground>
    </View>
  );
}
const App = () => {
  // for dark theme

  const [darkApp, setDarkApp] = useState(false);
  const appTheme = darkApp ? DarkTheme : DefaultTheme;

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      'changethemeevent',
      data => {
        setDarkApp(data);
      },
    );
    return () => {
      true;
    };
  }, []);

  // if user have token set logged in otherwise logout

  const [isloggedin, setLogged] = useState(null);

  const detectLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  };
  useEffect(() => {
    detectLogin();
  }, []);

  // const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  // React.useEffect(async () => {
  //   const appData = await AsyncStorage.getItem('isAppFirstLaunched');
  //   if (appData == null) {
  //     setIsAppFirstLaunched(true);
  //     AsyncStorage.setItem('isAppFirstLaunched', 'false');
  //   } else {
  //     setIsAppFirstLaunched(false);
  //   }

  //   // AsyncStorage.removeItem('isAppFirstLaunched');
  // }, []);

  return (
    <NavigationContainer theme={appTheme}>
      <StatusBar />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splashScreen" component={splashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="StationDetails" component={StationDetails} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="Drawer1" component={Drawer1} />
        <Stack.Screen name="profile" component={profile} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="help" component={help} />
        <Stack.Screen name="history" component={history} />
        <Stack.Screen name="Historydetails" component={Historydetails} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="StationList" component={StationList} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Schedual" component={Schedule} />
        <Stack.Screen name="petrolpump" component={petrolpump} />
        <Stack.Screen name="practice" component={practice} />
        {/**skip*/}
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="stationList1" component={stationList1} />
        <Stack.Screen name="history1" component={history1} />
        <Stack.Screen name="StationDetails1" component={StationDetails1} />
        <Stack.Screen name="help1" component={help1} />
        <Stack.Screen name="ChangeSchedual" component={ChangeSchedual} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  marker: {
    width: 30,
    height: 30,
  },
  container: {
    flex: 1,
  },
  chipsScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 80,
    paddingHorizontal: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  name: {
    fontSize: 20,
    marginBottom: 5,
  },
  image: {
    width: 120,
    height: 80,
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
  },
  signIn: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
});

export default App;

{
  /* 
   <ActivityIndicator size="large" color='white'
      style={{ flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:400}}/> */
}
