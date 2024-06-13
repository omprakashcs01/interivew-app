import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function App() {
  const [timer, setTimer] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);

  const startTimer = () => {
    setTimeInterval(
      setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000),
    );
  };

  const pauseTimer = () => {
    clearInterval(timeInterval);
  };

  const resetTimer = () => {
    setTimer(0);
    clearInterval(timeInterval);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>Timer: {timer}</Text>
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
