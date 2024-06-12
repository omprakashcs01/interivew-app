import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const OTPScreen = () => {
  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');
  const [f5, setF5] = useState('');
  const [f6, setF6] = useState('');
  const [count, setCount] = useState(60);

  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (count === 0) {
        clearInterval(timerInterval);
      } else {
        setCount(prevCount => prevCount - 1);
      }
    }, 1000);

    // Clean up the interval when the component unmounts or when count changes.
    return () => clearInterval(timerInterval);
  }, [count]); // Add count as a dependency

  const otpValidate = () => {
    let otp = '123456';
    let enterOpt = f1 + f2 + f3 + f4 + f5 + f6;
    if (enterOpt === otp) {
      Alert.alert('OTP Validation');
    } else {
      Alert.alert('Wrong OTP Try Again');
    }
  };
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: 20,
          alignSelf: 'center',
          fontWeight: '800',
          marginTop: 100,
          color: 'black',
        }}>
        OTP Verification
      </Text>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          marginTop: 100,
          marginHorizontal: 20,
          fontSize: 25,
          textAlign: 'center',
        }}>
        <TextInput
          style={{
            borderWidth: 1,
            width: 50,
            height: 50,

            borderRadius: 10,
            fontSize: 25,
            textAlign: 'center',
            borderColor: f1.length >= 1 ? 'blue' : '#000',
          }}
          ref={et1}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={txt => {
            setF1(txt);
            if (txt.length >= 1) {
              et2.current.focus();
            }
          }}
          value={f1}
        />
        <TextInput
          style={{
            borderWidth: 1,
            width: 50,
            height: 50,

            borderRadius: 10,
            fontSize: 25,
            textAlign: 'center',
            borderColor: f2.length >= 1 ? 'blue' : '#000',
          }}
          ref={et2}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={txt => {
            setF2(txt);
            if (txt.length >= 1) {
              et3.current.focus();
            } else if (txt.length < 1) {
              et1.current.focus();
            }
          }}
          value={f2}
        />
        <TextInput
          style={{
            borderWidth: 1,
            width: 50,
            height: 50,

            borderRadius: 10,
            fontSize: 25,
            textAlign: 'center',
            borderColor: f3.length >= 1 ? 'blue' : '#000',
          }}
          ref={et3}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={txt => {
            setF3(txt);
            if (txt.length >= 1) {
              et4.current.focus();
            } else if (txt.length < 1) {
              et2.current.focus();
            }
          }}
          value={f3}
        />
        <TextInput
          style={{
            borderWidth: 1,
            width: 50,
            height: 50,

            borderRadius: 10,
            fontSize: 25,
            textAlign: 'center',
            borderColor: f4.length >= 1 ? 'blue' : '#000',
          }}
          ref={et4}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={txt => {
            setF4(txt);
            if (txt.length >= 1) {
              et5.current.focus();
            } else if (txt.length < 1) {
              et3.current.focus();
            }
          }}
          value={f4}
        />
        <TextInput
          style={{
            borderWidth: 1,
            width: 50,
            height: 50,

            borderRadius: 10,
            fontSize: 25,
            textAlign: 'center',
            borderColor: f5.length >= 1 ? 'blue' : '#000',
          }}
          value={f5}
          ref={et5}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={txt => {
            setF5(txt);
            if (txt.length >= 1) {
              et6.current.focus();
            } else if (txt.length < 1) {
              et4.current.focus();
            }
          }}
        />
        <TextInput
          style={{
            borderWidth: 1,
            width: 50,
            height: 50,
            fontSize: 25,
            textAlign: 'center',
            borderRadius: 10,
            borderColor: f6.length >= 1 ? 'blue' : '#000',
          }}
          ref={et6}
          value={f6}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={txt => {
            setF6(txt);
            if (txt.length >= 1) {
              et6.current.focus();
            } else if (txt.length < 1) {
              et5.current.focus();
            }
          }}
        />
      </View>
      <View
        style={{
          marginHorizontal: 50,
          marginTop: 50,
          borderRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{padding: 20, color: count == 0 ? 'blue' : 'grey'}}
            onPress={() => setCount(60)}>
            <Text style={{fontSize: 18}}>Resend</Text>
          </TouchableOpacity>
          {count !== 0 && (
            <Text style={{marginTop: 20, fontSize: 18}}>{count + 'Sec'}</Text>
          )}
        </View>

        <TouchableOpacity
          disabled={
            f1 !== '' &&
            f2 !== '' &&
            f3 !== '' &&
            f4 !== '' &&
            f5 !== '' &&
            f6 !== ''
              ? false
              : true
          }
          style={{
            backgroundColor:
              f1 !== '' &&
              f2 !== '' &&
              f3 !== '' &&
              f4 !== '' &&
              f5 !== '' &&
              f6 !== ''
                ? 'blue'
                : 'grey',
            padding: 20,
            borderRadius: 20,
            alignItems: 'center',
          }}
          onPress={otpValidate}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            Verify OTP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({});
