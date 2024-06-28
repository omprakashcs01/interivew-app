// src/CountdownTimer.js
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CountdownTimer = ({
  initialDays = 0,
  initialHours = 0,
  initialMinutes = 0,
  initialSeconds = 0,
}) => {
  const [days, setDays] = useState(initialDays);
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTimer();
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  const updateTimer = () => {
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(interval);
    } else if (hours === 0 && minutes === 0 && seconds === 0) {
      setDays(days - 1);
      setHours(23);
      setMinutes(59);
      setSeconds(59);
    } else if (minutes === 0 && seconds === 0) {
      setHours(hours - 1);
      setMinutes(59);
      setSeconds(59);
    } else if (seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    } else {
      setSeconds(seconds - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>
        {String(days).padStart(2, '0')}:{String(hours).padStart(2, '0')}:
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default CountdownTimer;
