import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

const PracticePage = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, []);

  const formatNumber = number => (number < 10 ? `0${number}` : number);


  const formatNumberOK = num=> (num < 10 ? `0${num}`: num)


  const startTimer = () => {
    if (timer.current) return; // Prevent multiple intervals
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
  };

  const restartTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    setSeconds(0);
    setMinutes(0);
    timer.current = null;
    startTimer();
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
          justifyContent: 'space-around',
          width: '80%',
          marginTop: 20,
        }}>
        <Button title="Start" onPress={startTimer} />
        <Button title="Pause" onPress={pauseTimer} />
        <Button title="Restart" onPress={restartTimer} />
      </View>
    </View>
  );
};

export default PracticePage;

const styles = StyleSheet.create({});
/////// pause restrt 






import { Text, SafeAreaView, StyleSheet, View, Button } from 'react-native';
import React, { useState, useRef } from "react";

export default function Basictimer() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  let timer = useRef(null);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    timer.current = setInterval(() => {
      setSecond((prevSec) => {
        if (prevSec === 59) {
          setMinute((prevMin) => prevMin + 1);
          return 0;
        }
        return prevSec + 1;
      });
    }, 1000);
    setIsRunning(true);
  }

  function pauseTimer() {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
      setIsRunning(false);
    } else {
      startTimer();
    }
  }

  function stopTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    timer.current = null;
    setSecond(0);
    setMinute(0);
    setIsRunning(false);
  }

  return (
    <View>
      <Text> Timer {minute}:{second < 10 ? `0${second}` : second}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button title="Start" onPress={startTimer} disabled={isRunning} />
        <Button title={isRunning ? "Pause" : "Resume"} onPress={pauseTimer} />
        <Button title="Stop" onPress={stopTimer} />
      </View>
    </View>
  );
}

