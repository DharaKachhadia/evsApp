import {
  View,
  Text,
  BackHandler,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';


export default function Historydetails({route, navigation}) {
  const itemData = route.params.item;
  function handleBackButtonClick() {
    navigation.navigate('history');
    return true;
  }
  const onPress = () => {
    navigation.navigate('ChangeSchedual',{item:itemData});
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
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.container1}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("history");
          }}>
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.container2}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            alignSelf: 'center',
            marginTop: 25,
            marginBottom: 25,
            color: '#000000',
          }}>
          {itemData.StationName}
        </Text>
        <View
          style={{backgroundColor: '#ccc', height: 2, width: '100%'}}></View>
        <View style={{marginTop: 25, marginLeft: 25}}>
          <Text style={{color: '#000000',fontWeight:'bold'}}>
            Customer Name :{' '}
            <Text style={{color: '#C04000'}}>{itemData.FirstName} </Text>
            <Text style={{color: '#C04000'}}>{itemData.LastName}</Text>
          </Text>
          <Text style={{color: '#000000', marginTop:15,fontWeight:'bold'}}>
            Customer ContactNo :{' '}
            <Text style={{color: '#0C0ADC' , marginTop:15}}>{itemData.ContactNo} </Text>
          </Text>
          <Text style={{color: '#000000' , marginTop:15,fontWeight:'bold'}}>
            Customer Email :{' '}
            <Text style={{color: 'orange'}}>{itemData.Email} </Text>
          </Text>
          <Text style={{color: '#000000', marginTop:15,fontWeight:'bold'}}>
            City : <Text style={{color: '#006400'}}>{itemData.City} </Text>
          </Text>
          <Text style={{color: '#000000', marginTop:15,fontWeight:'bold'}}>
            State : <Text style={{color: '#800080'}}>{itemData.State} </Text>
          </Text>
          <Text style={{color: '#000000', marginTop:15,fontWeight:'bold'}}>
            OwnerName :{' '}
            <Text style={{color: '#C04000'}}>{itemData.OwnerName} </Text>
          </Text>
          <Text style={{color: '#000000', marginTop:15,fontWeight:'bold'}}>
            Station ContactNo :{' '}
            <Text style={{color: '#0C0ADC'}}>{itemData.StationContact} </Text>
          </Text>
          <Text style={{color: '#000000', marginTop:15,fontWeight:'bold'}}>
            Station Address :{' '}
            <Text style={{color: '#000000'}}>{itemData.StationAddress} </Text>
          </Text>
          <Text style={{color: '#000000', marginTop:15,fontWeight:'bold'}}>
            Station Timing :{' '}
            <Text style={{color: '#000000'}}>{itemData.StationTiming} </Text>
          </Text>
          <Text style={{color: '#000000', marginTop:15,fontWeight:'bold'}}>
          Car :{' '}
            <Text style={{color: '#000000'}}>{itemData.Car} </Text>
          </Text>
          <Text style={{color: '#000000', marginTop:15,fontWeight:'bold'}}>
            Selected Plug :{' '}
            <Text style={{color: '#000000'}}>{itemData.Plug} </Text>
          </Text>
          <Text style={{color: '#000000', marginTop:15,fontWeight:'bold'}}>
          Date :{' '}
            <Text style={{color: '#000000'}}>{itemData.Date.slice(0,10)} (YYYY-MM-DD)</Text>
          </Text>
          <Text style={{color: '#000000', marginTop:15,fontWeight:'bold'}}>
          Schedual Time :{' '}
            <Text style={{color: '#0C0ADC'}}>{itemData.Time}</Text>
          </Text>
          <Text style={{color: '#000000', marginTop:15,fontWeight:'bold'}}>
          Payment :{' '}
            <Text style={{color:itemData.Payment === "Pending" ? "red" : 'green' }}>{itemData.Payment} </Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={onPress}>
        <Text style={styles.submit}>Change Schedual</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  submit: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  btn: {
    height: 55,
    width: '86%',
    borderRadius: 10,
    marginTop: 30,
    marginLeft: '7%',
    backgroundColor: '#75C31E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },


  container: {
    height: '100%',
    width: '100%',
  },
  container1: {
    height: '20%',
    width: '100%',
    backgroundColor: '#75C31E',
  },
  container2: {
    height: '80%',
    width: '86%',
    marginLeft: '7%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: -100,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1.0,
    elevation: 10,
    position: 'relative',
  },
  history: {
    marginBottom: 50,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#75C31E',
    elevation: 10,
  },
});