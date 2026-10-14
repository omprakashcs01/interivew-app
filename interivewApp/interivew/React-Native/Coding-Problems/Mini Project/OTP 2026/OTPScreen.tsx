import React, {useState, useRef, useEffect} from 'react';
import {Text, View, TextInput, Button} from 'react-native';

const OTP_LENGTH = 4;

const OTPScreen = () => {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [timer, setTimer] = useState(30);

  const inputs = useRef<(TextInput | null)[]>([]);

  // 1. Handle OTP input
  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  // 2. Handle Backspace
  const handleBackspace = (key: string, index: number) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  // 3. Countdown timer
  useEffect(() => {
    if (timer === 0) return;

    const id = setTimeout(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(id);
  }, [timer]);

  // 4. Resend OTP
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
      }}>
      <Text style={{fontSize: 20, marginBottom: 20}}>Enter OTP</Text>

      <View style={{flexDirection: 'row'}}>
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
            onChangeText={value => handleChange(value, index)}
            onKeyPress={({nativeEvent}) =>
              handleBackspace(nativeEvent.key, index)
            }
            style={{
              borderWidth: 1,
              width: 50,
              height: 50,
              margin: 5,
              borderRadius: 10,
              textAlign: 'center',
              fontSize: 20,
            }}
          />
        ))}
      </View>

      <Button
        title="Verify OTP"
        disabled={otp.some(digit => !digit)}
        onPress={() => console.log(otp.join(''))}
      />

      <View style={{marginTop: 20}}>
        {timer === 0 ? (
          <Button title="Resend OTP" onPress={handleResend} />
        ) : (
          <Text>Resend OTP in {timer}s</Text>
        )}
      </View>
    </View>
  );
};

export default OTPScreen;
