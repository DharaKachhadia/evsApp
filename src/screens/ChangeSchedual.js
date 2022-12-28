import React, { useState, useEffect } from 'react';
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
import { TimePicker } from 'react-native-simple-time-picker';
import DatePicker from 'react-native-datepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ChangeSchedual = ({ route, navigation }) => {
    //api call
    const itemData = route.params.item
    const [selectedPlugValue, setSelectedPlugValue] = useState(itemData.Plug);
    const [selectedCarValue, setSelectedCarValue] = useState(itemData.car);
    const [date, setDate] = useState(date);
    const [selectedHours, setSelectedHours] = useState('');
    const [selectedMinutes, setSelectedMinutes] = useState('');
    const time = selectedHours + ':' + selectedMinutes
    const [FirstName, setFirstName] = useState(itemData.FirstName);
    const [value, setValue] = useState('Save');
    const [load, setLoad] = useState(false);
    const [color, setColor] = useState(['#88d840', '#75C31E', '#4c9a2a']);
    // const[login,setLogin] = useState(false);


    const [isLoading, setIsLoading] = useState(true);


    const OnPress = async props => {
        setLoad(true)
        setValue("")
        setColor(['#D3D3D3', '#D3D3D3', '#ccc'])
        fetch(`http://evspoint.com/api/Booking/update/${itemData._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                FirstName: itemData.FirstName,
                LastName: itemData.LastName,
                ContactNo: itemData.ContactNo,
                Email: itemData.Email,
                City: itemData.City,
                State: itemData.State,
                Car: selectedCarValue,
                Plug: selectedPlugValue,
                Date: date,
                Time: time,
                // password: password,
            }),
        })
            .then(res => res.json())
            .then(async data => {
                try {
                    setIsLoading(true);
                    setLoad(false)
                    setValue("Save")
                    setColor(['#88d840', '#75C31E', '#4c9a2a'])
                    navigation.navigate('history');
                } catch (error) {
                    Alert.alert(error.message);
                    setLoad(false)
                    setValue("Save")
                    setColor(['#88d840', '#75C31E', '#4c9a2a'])
                }
            })

    };


    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View>
                <View style={styles.text}>
                    <Text style={{ fontSize: 25, fontFamily: 'bold', color: 'black' }}>Change Schedual</Text>
                </View>
                <KeyboardAvoidingView behavior="height" keyboardVerticalOffset="2">
                    <View style={styles.container1}>
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
                                <Picker.Item label="GB/T" value="GB/T" />
                                <Picker.Item label="CCS2" value="CCS2" />

                            </Picker>
                        </View>
                        <Text style={{ marginLeft: '11%', color: '#616161' }}>Select Your Schedule:</Text>
                        <View style={styles.date}>


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
                            <Text style={{ marginLeft: '36%', color: 'black' }}>hours</Text>
                            <Text style={{ marginLeft: '22%', color: 'black' }}>minutes</Text>
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
                        <Text style={{ marginTop: 20, fontSize: 15, marginLeft: '10%', color: 'black' }}>Your Selected Date: {date}</Text>
                        <Text style={{ marginTop: 20, fontSize: 15, marginLeft: '10%', color: 'black' }}>Your Selected Time: {time}</Text>
                        <TouchableOpacity disabled={load ? true : false} onPress={OnPress}>
                            <View style={{ height: 50 }}>
                                <LinearGradient
                                    colors={color}
                                    style={styles.btn}
                                >
                                    <Image display={load ? 'flex' : 'none'} style={{ height: 40, width: 40, marginTop: 2 }} resizeMode='contain' source={require('../images/load1.gif')} />
                                    <Text
                                        style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                                        {value}
                                    </Text>
                                </LinearGradient>
                            </View>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    date:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,

    },
    datePickerStyle:
    {
        width: '70%',
        marginBottom: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#75C31E',
    },
    container1: {
        backgroundColor: 'white',
        height: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 20,
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
        alignSelf: 'center',
        color: 'white',
        marginTop: 20
    },
    btn: {
        // flex: 1,
        height: '90%',
        borderRadius: 10,
        marginTop: 25,
        // marginBottom: -20,
        // marginLeft: 60,
        // marginRight: 60,
        width: '80%',
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
    Picker: {
        marginTop: -4,
        width: '100%',
        color: 'black'
    },
});


export default ChangeSchedual;

