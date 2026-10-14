
import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';

const OTP_LENGTH = 4;

const OTPScreen = () => {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const [timer, setTimer] = useState(30);
  const inputs = useRef([]);

  // Timer
  useEffect(() => {
    if (timer === 0) return;

    const id = setTimeout(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(id);
  }, [timer]);

  // OTP input
  const handleOTP = (item, index) => {
    if (!/^\d*$/.test(item)) return;

    const newOTP = [...otp];
    newOTP[index] = item;
    setOtp(newOTP);

    if (item && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  // Backspace
  const handleBackspace = (key, index) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  // Verify OTP
  const checkOtp = () => {
    const enteredOtp = otp.join('');

    if (enteredOtp === '1234') {
      Alert.alert('Success', 'OTP Verified');
    } else {
      Alert.alert('Error', 'Invalid OTP');
    }
  };

  // Resend OTP
  const handleResend = () => {
    setOtp(Array(OTP_LENGTH).fill(''));
    setTimer(30);
    inputs.current[0]?.focus();
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        OTP Screen
      </Text>

      <View style={{ flexDirection: 'row' }}>
        {otp.map((item, index) => (
          <TextInput
            key={index}
            value={item}
            maxLength={1}
            keyboardType="number-pad"
            autoFocus={index === 0}
            ref={ref => {
              inputs.current[index] = ref;
            }}
            onChangeText={value => handleOTP(value, index)}
            onKeyPress={({ nativeEvent }) =>
              handleBackspace(nativeEvent.key, index)
            }
            style={{
              borderWidth: 1,
              height: 50,
              width: 50,
              borderRadius: 10,
              margin: 5,
              fontSize: 20,
              textAlign: 'center',
            }}
          />
        ))}
      </View>

      <Button
        title="Verify OTP"
        onPress={checkOtp}
        disabled={otp.some(digit => !digit)}
      />

      <View style={{ marginTop: 20 }}>
        {timer > 0 ? (
          <Text>Resend in {timer}s</Text>
        ) : (
          <Button title="Resend OTP" onPress={handleResend} />
        )}
      </View>
    </View>
  );
};

export default OTPScreen;
