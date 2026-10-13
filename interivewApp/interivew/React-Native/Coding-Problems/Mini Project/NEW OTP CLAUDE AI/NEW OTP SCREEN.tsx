import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const OTPScreen = () => {
  // State for 4 digits
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  // Refs for inputs
  const inputs = Array(4)
    .fill(0)
    .map(() => useRef(null));

  // Timer effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setCanResend(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // Handle input change
  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value exists
    if (value !== '') {
      if (index < 3) {
        inputs[index + 1].current.focus();
      }
    }
  };

  // Handle backspace
  const handleKeyPress = (event, index) => {
    if (
      event.nativeEvent.key === 'Backspace' &&
      index > 0 &&
      otp[index] === ''
    ) {
      inputs[index - 1].current.focus();
    }
  };

  const handleResend = () => {
    setTimer(30);
    setCanResend(false);
    setOtp(['', '', '', '']);
    inputs[0].current.focus();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputs[index]}
            style={styles.otpInput}
            value={digit}
            onChangeText={value => handleOtpChange(value, index)}
            onKeyPress={event => handleKeyPress(event, index)}
            maxLength={1}
            keyboardType="number-pad"
          />
        ))}
      </View>

      {canResend ? (
        <TouchableOpacity onPress={handleResend}>
          <Text style={styles.resendText}>Resend OTP</Text>
        </TouchableOpacity>
      ) : (
        <Text>Resend in {timer}s</Text>
      )}

      <TouchableOpacity
        style={[
          styles.verifyButton,
          otp.every(digit => digit !== '')
            ? styles.activeButton
            : styles.inactiveButton,
        ]}
        disabled={!otp.every(digit => digit !== '')}
        onPress={() => console.log('Verify OTP:', otp.join(''))}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  otpInput: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: '#000',
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  resendText: {
    color: 'blue',
    marginTop: 10,
  },
  verifyButton: {
    width: '80%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: 'blue',
  },
  inactiveButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OTPScreen;
