import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const OTPInputScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRef = useRef([]);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer > 0) {
      const timeInterval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timeInterval);
    }
  }, [timer]);

  const handleOTPChange = (value, index) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];

    // Handle Backspace
    if (value === '' && otp[index] !== '') {
      newOtp[index] = '';
    } else if (value) {
      newOtp[index] = value;
      if (index < 3) {
        inputRef.current[index + 1]?.focus();
      }
    }
    setOtp(newOtp);
  };

  const handleBackspace = (value, index) => {
    if (!value && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      inputRef.current[index - 1]?.focus();
    }
  };

  const resendOTP = () => {
    setOtp(['', '', '', '']);
    setTimer(30);
  };

  const handleSubmit = () => {
    const entredOTP = otp.join('');
    console.log('Submit OTP', entredOTP);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20}}>
        OTP Screen
      </Text>
      <View style={{flexDirection: 'row'}}>
        {otp.map((item, index) => (
          <TextInput
            ref={ref => (inputRef.current[index] = ref)}
            key={index}
            style={{
              borderWidth: 1,
              width: 50,
              height: 50,
              fontSize: 20,
              marginHorizontal: 5,
              borderRadius: 5,
              textAlign: 'center',
            }}
            keyboardType="numeric"
            maxLength={1}
            value={item}
            onChangeText={value => handleOTPChange(value, index)}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace(item, index);
              }
            }}
          />
        ))}
      </View>

      {timer > 0 ? (
        <Text style={{marginTop: 20, fontSize: 18}}>
          Resend OTP in {timer}s
        </Text>
      ) : (
        <TouchableOpacity onPress={resendOTP}>
          <Text style={{marginTop: 10, fontSize: 22}}>Send Again</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={handleSubmit}
        disabled={otp.includes('')}
        style={{
          marginTop: 20,
          backgroundColor: otp.includes('') ? 'gray' : 'blue',
          padding: 10,
          borderRadius: 5,
          opacity: otp.includes('') ? 0.5 : 1,
        }}>
        <Text>Submit OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPInputScreen;
