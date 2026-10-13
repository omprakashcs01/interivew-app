import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const OTP_LENGTH = 4;

const OTPScreen = () => {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const [timer, setTimer] = useState(30);
  const inputs = useRef([]);

  useEffect(() => {
    if (timer === 0) return;

    const id = setTimeout(() => setTimer(prev => prev - 1), 1000);
    return () => clearTimeout(id);
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (key, index) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setOtp(Array(OTP_LENGTH).fill(''));
    setTimer(30);
    inputs.current[0]?.focus();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>

      <View style={styles.row}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => {
              inputs.current[index] = ref;
            }}
            value={digit}
            maxLength={1}
            keyboardType="number-pad"
            autoFocus={index === 0}
            selectTextOnFocus
            onChangeText={value => handleChange(value, index)}
            onKeyPress={({ nativeEvent }) => handleBackspace(nativeEvent.key, index)}
            style={styles.input}
          />
        ))}
      </View>

      <Button
        title="Verify OTP"
        disabled={otp.some(digit => !digit)}
        onPress={() => console.log(otp.join(''))}
      />

      {timer === 0 ? (
        <Button title="Resend OTP" onPress={handleResend} />
      ) : (
        <Text>Resend in {timer}s</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    margin: 5,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default OTPScreen;