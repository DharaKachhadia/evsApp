import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, StatusBar, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-datepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TimePicker } from 'react-native-simple-time-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function booking({ route, navigation }) {


  const [isLoading, setIsLoading] = useState(true);


  const itemData = route.params.item;


  const [selectedHours, setSelectedHours] = useState('');
  const [selectedMinutes, setSelectedMinutes] = useState('');
  const time = selectedHours + ':' + selectedMinutes


  const StationName = itemData.StationName
  const StationContact = itemData.ContactNo
  const ownerName = itemData.ownerName
  const stationAddress = itemData.address
  const stationTime = itemData.openingTime + " To " + itemData.closeTime
  const OwnerId = itemData.ownerId



  const [selectedPlugValue, setSelectedPlugValue] = useState(itemData.plug1);
  const [selectedCarValue, setSelectedCarValue] = useState('TATA Tigor EV');
  const [date, setDate] = useState(date);
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [ContactNo, setContactNo] = useState('');
  const [Email, setEmail] = useState('');
  const [City, setCity] = useState('');
  const [State, setState] = useState('');


  const [userId, setUserId] = useState("Loading")


  useEffect(async () => {
    const token = await AsyncStorage.getItem("token")
    fetch('http://evspoint.com/api', {
      headers: new Headers({
        Authorization: "Bearer " + token
      })
    }).then(res => res.json())
      .then(data => {
        setUserId(data.userId)
        setFirstName(data.firstName)
        setLastName(data.lastName)
        setContactNo(data.contactNo)
        setEmail(data.email)
      })
  }, [])


  const sendCred = async (navigation) => {


    fetch("http://evspoint.com/api/user/booking", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "UserId": userId,
        "FirstName": FirstName,
        "LastName": LastName,
        "ContactNo": ContactNo,
        "Email": Email,
        "City": City,
        "State": State,
        "Car": selectedCarValue,
        "Plug": selectedPlugValue,
        "Date": date,
        "Time": time,
        "StationName": StationName,
        "StationContact": StationContact,
        "OwnerId": OwnerId,
        "OwnerName": ownerName,
        "StationAddress": stationAddress,
        "StationTiming": stationTime
      })
    })
      .then(res => res.json())
      .then(async (data) => {
        try {
          if (City.length == 0) {
            Alert.alert("Please enter City",)
            // <Text>hello</Text>
            // return Alert.alert(data.message)
          }
          else if (State.length == 0) {
            Alert.alert("Please enter State",)
            // <Text>hello</Text>
          }

          else {
            await AsyncStorage.setItem('token1', data.token1)
            navigation.navigate("Payment", { FirstName, LastName })
          }

        } catch (error) {
          console.log(error.message)

          Alert.alert(
            "please enter valid detalis",
          )
        }
      })
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#75C31E" />
      </View>
    );
  }
  return (


    <ScrollView>
      <StatusBar hidden />


      <View style={{ marginTop: 0, padding: 20 }}>
        <Image source={{ uri: itemData.Image }} resizeMode="cover" style={styles.Image} />
      </View>


      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#353535', alignSelf: 'center', marginBottom: 10 }}>Booking Details</Text>
      {/* <Text>{StationName},{StationContact},{ownerName},{stationAddress},{stationTime},{OwnerId},{OwnerId}</Text> */}
      <View style={{ flexDirection: 'row', marginTop: '2%' }}>
        < MaterialIcons name="apartment" type="MaterialIcons" size={22} style={{ color: '#75c31e', marginLeft: '10%', marginTop: 12 }} />
        <TextInput style={styles.fname} placeholder="City" onChangeText={(text) => setCity(text)} placeholderTextColor='grey' color='black' />
        < MaterialIcons name="home" type="MaterialIcons" size={23} style={{ color: '#75c31e', marginTop: 12 }} />
        <TextInput style={styles.lname} placeholder="State" onChangeText={(text) => setState(text)} placeholderTextColor='grey' color='black' />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ height: 1.2, width: '37.5%', backgroundColor: 'black', marginLeft: '10%' }}></View>
        <View style={{ height: 1.2, width: '37.5%', backgroundColor: 'black', marginLeft: '5%' }}></View>
      </View>


      <Text style={{ marginLeft: '11%', color: '#616161', marginTop: '8%' }}>Choose Your Car:</Text>
      <View style={styles.Pick}>


        <Picker
          style={styles.Picker}
          selectedValue={selectedCarValue}


          onValueChange={(itemValue) => setSelectedCarValue(itemValue)}
        >
          <Picker.Item label="TATA Tigor EV" value="TATA Tigor EV" />
          <Picker.Item label="TATA Nexon EV" value="TATA Nexon EV" />
          <Picker.Item label="MG ZS EV" value="MG ZS EV" />
          <Picker.Item label="Hyundai Kona Electric" value="Hyundai Kona Electric" />
          <Picker.Item label="Jaguar I-Pace" value="Jaguar I-Pace" />
          <Picker.Item label="Audi e-tron GT" value="Audi e-tron GT" />
          <Picker.Item label="BMW iX" value="BMW iX" />
          <Picker.Item label="Porsche Taycan" value="Porsche Taycan" />
          <Picker.Item label="Porsche Taycan Cross Turismo" value="Porsche Taycan Cross Turismo" />
          <Picker.Item label="Nissan Leaf EV" value="Nissan Leaf EV" />
          <Picker.Item label="Audi e-tron" value="Audi e-tron" />
          <Picker.Item label="Audi e-tron Sportback" value="Audi e-tron Sportback" />
          <Picker.Item label="Tesla Model 3" value="Tesla Model 3" />
          <Picker.Item label="Mahindra eKUV100" value="Mahindra eKUV100" />
          <Picker.Item label="Mahindra e20 NXT" value="Mahindra e20 NXT" />
          <Picker.Item label="TATA Tiago EV" value="TATA Tiago EV" />
        </Picker>
      </View>


      <Text style={{ marginLeft: '11%', color: '#616161' }}>Choose Your Plug:</Text>
      <View style={styles.Pick}>


        <Picker
          style={styles.Picker}


          selectedValue={selectedPlugValue}
          onValueChange={(itemValue) => setSelectedPlugValue(itemValue)}
        >


          <Picker.Item label="CHAdeMO" value="CHAdeMO" />
          <Picker.Item label="CCS1" value="CCS1" />
          <Picker.Item label="Tesla" value="Tesla" />
          <Picker.Item label="GB/T)" value="GB/T)" />
          <Picker.Item label="CCS2" value="CCS2" />



        </Picker>


      </View>
      <Text style={{ marginLeft: '11%', color: '#616161' }}>Select Your Schedule:</Text>
      <View style={styles.container}>


        <Ionicons name="calendar" size={40} style={{ color: '#75c31e', marginBottom: '2%' }} />
        <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="select date"
          placeholderTextColor='#75c31e'
          format="YYYY-MM-DD"
          minDate="2022-02-04"
          maxDate="2030-02-04"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              display: 'none',
              // position: 'absolute',
              // left: 0,
              // top: 4,
              // marginLeft: 0,
            },
            dateInput: {
              marginLeft: '5%',
              borderRadius: 5,
              backgroundColor: 'white',
              borderWidth: 0,
              elevation: 5,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text style={{ marginLeft: '36%',color:'black' }}>hours</Text>
        <Text style={{ marginLeft: '22%',color:'black' }}>minutes</Text>
      </View>
      <View style={{ flexDirection: "row", width: '80%', alignSelf: 'center', }}>


        <Ionicons name="time" size={40} style={{ color: '#75c31e', marginRight: 15 }} />


        <View style={{
          height: 42,
          width: '100%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: 'white',
          //  marginTop:20,
          elevation: 5,
          borderRadius: 5,


        }}>
          <TimePicker
            selectedHours={selectedHours}
            //initial Hourse value
            selectedMinutes={selectedMinutes}
            //initial Minutes value
            onChange={(value) => {
              setSelectedHours(value.hours);
              setSelectedMinutes(value.minutes);
            }}


          />
        </View>
      </View>
      <Text style={{ marginTop: 20, fontSize: 15, marginLeft: '10%' ,color:'black'}}>Your Selected Date: {date}</Text>
      <Text style={{ marginTop: 20, fontSize: 15, marginLeft: '10%',color:'black' }}>Your Selected Time: {time}</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.book} onPress={() => sendCred(navigation)} >
        <Text style={{ fontSize: 25, alignSelf: 'center', color: 'white', marginTop: 5, fontWeight: 'bold' }}>Book</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  sliderContainer: {
    height: 250,
    width: '100%',
    marginTop: 0,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  // book:{
  //   height:100,
  //   width:'100%',
  //   backgroundColor:'#75c31e',
  //   marginTop:50,
  //   marginBottom:50,
  //   borderTopWidth:2,
  //   borderBottomWidth:2,
  //   borderColor:'green'
  // },
  Pick: {
    height: 45,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
    alignSelf: 'center',
    elevation: 5,
    marginBottom: 30,
    marginTop: 5
  },
  Image: {
    height: 150,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 15
  },
  Picker: {
    marginTop: -4,
    width: '100%',
    color: 'black'
  },
  fname: {
    paddingBottom: 0,
    width: '31%',
    marginRight: '6%',
  },
  lname: {
    paddingBottom: 0,
    width: '37.5%',
  },
  phone: {
    marginTop: 10,
    paddingBottom: 0,
    width: '80%',
  },
  datePickerStyle:
  {
    width: '70%',
    marginBottom: 10,
  },
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  book: {
    height: 45,
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#75c31e',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10
  }
})
//location_city