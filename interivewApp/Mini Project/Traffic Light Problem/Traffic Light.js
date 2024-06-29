import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';

const Light = {
  red: 'red',
  green: 'green',
  yellow: 'yellow',
};

export default function TrafficLight() {
  const [active, setActive] = useState(Light.red);

  useEffect(() => {
    const timer = lightLogic();

    // Clean up the timer when the component unmounts or when the active light changes
    return () => clearTimeout(timer);
  }, [active]);

  const lightLogic = () => {
    let timer;
    switch (active) {
      case Light.red: {
        setTimeout(() => {
          setActive(Light.yellow);
        }, 4000);
        break;
      }

      case Light.yellow: {
        setTimeout(() => {
          setActive(Light.green);
        }, 3000);
        break;
      }

      case Light.green: {
        setTimeout(() => {
          setActive(Light.red);
        }, 5000);
        break;
      }
    }
    return timer;
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          borderWidth: 1,
          height: '50%',
          width: '30%',
          marginVertical: 60,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: active === 'red' ? 'red' : 'white',
            height: 50,
            width: 50,
            borderRadius: 100,
            margin: 20,
          }}></View>
        <View
          style={{
            backgroundColor: active === 'yellow' ? 'yellow' : 'white',
            height: 50,
            width: 50,
            borderRadius: 100,
            margin: 20,
          }}></View>
        <View
          style={{
            backgroundColor: active === 'green' ? 'green' : 'white',
            height: 50,
            width: 50,
            borderRadius: 100,
            margin: 20,
          }}></View>
      </View>
    </View>
  );
}
