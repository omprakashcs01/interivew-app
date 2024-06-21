import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

const PracticePage = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const timer = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, []);

  const formatNumber = number => (number < 10 ? `0${number}` : number);

  const startTimer = () => {
    if (timer.current) return; // Prevent multiple intervals
    setIsPaused(false);
    timer.current = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 59) {
          setMinutes(prevMinutes => prevMinutes + 1);
          return 0;
        }
        return prevSeconds + 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
    setIsPaused(true);
  };

  const stopTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
     
    setIsPaused(false);
  };

  const restartTimer = () => {
    stopTimer();
    startTimer();
  };

  const resumeTimer = () => {
    if (isPaused) {
      startTimer();
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 25}}>Timer</Text>
      <Text style={{fontSize: 25}}>
        {formatNumber(minutes)}:{formatNumber(seconds)}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          marginTop: 20,
          marginHorizontal: 50,
        }}>
        <Button title="Start" onPress={startTimer} />
        <Button title="Pause" onPress={pauseTimer} />
        <Button title="Resume" onPress={resumeTimer} />
        <Button title="Restart" onPress={restartTimer} />
        <Button title="Stop" onPress={stopTimer} />
      </View>
    </View>
  );
};

export default PracticePage;

const styles = StyleSheet.create({});
