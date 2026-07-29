import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  // Initialize minutes and seconds separately
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);

  const startTimer = () => {
    setTimeInterval(
      setInterval(() => {
        // Use functional update form for setting seconds
        setSeconds(prevSeconds => (prevSeconds + 1) % 60); // Reset seconds after 59
        // Check if seconds reach 0, increment minutes
        setMinutes(prevMinutes => {
          if ((prevMinutes * 60 + prevSeconds + 1) % 60 === 0) {
            return prevMinutes + 1;
          } else {
            return prevMinutes;
          }
        });
      }, 1000),
    );
  };

  const pauseTimer = () => {
    clearInterval(timeInterval);
  };

  const resetTimer = () => {
    setMinutes(0);
    setSeconds(0);
    clearInterval(timeInterval);
  };

  // Format minutes and seconds for display
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>Timer: {formattedTime}</Text>
      <View style={styles.buttonWrapper}>
        <Button title="Start" onPress={startTimer} />
        <Button title="Pause" onPress={pauseTimer} />
        <Button title="Reset" onPress={resetTimer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});
