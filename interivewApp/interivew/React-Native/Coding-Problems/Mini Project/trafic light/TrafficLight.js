// import React, {useState, useEffect} from 'react';
// import {View} from 'react-native';

// const TrafficLight = () => {
//   const [light, setLight] = useState('red');

//   useEffect(() => {
//     const interval = handleLightChange(light, setLight);
//     return () => clearTimeout(interval);
//   }, [light]);

//   return (
//     <View style={containerStyle}>
//       <View style={[lightStyle, light === 'red' && redLightStyle]} />
//       <View style={[lightStyle, light === 'yellow' && yellowLightStyle]} />
//       <View style={[lightStyle, light === 'green' && greenLightStyle]} />
//     </View>
//   );
// };

// const handleLightChange = (light, setLight) => {
//   const changeLight = () => {
//     if (light === 'red') {
//       setLight('green');
//     } else if (light === 'green') {
//       setLight('yellow');
//     } else if (light === 'yellow') {
//       setLight('red');
//     }
//   };

//   let interval;
//   if (light === 'red') {
//     interval = setTimeout(changeLight, 4000);
//   } else if (light === 'yellow') {
//     interval = setTimeout(changeLight, 500);
//   } else if (light === 'green') {
//     interval = setTimeout(changeLight, 3000);
//   }

//   return interval;
// };

// const containerStyle = {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: '#000',
// };

// const lightStyle = {
//   width: 100,
//   height: 100,
//   borderRadius: 50,
//   margin: 10,
//   backgroundColor: '#333',
// };

// const redLightStyle = {
//   backgroundColor: 'red',
// };

// const yellowLightStyle = {
//   backgroundColor: 'yellow',
// };

// const greenLightStyle = {
//   backgroundColor: 'green',
// };

// export default TrafficLight;
//inline 






import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

const TrafficLight = () => {
  const [light, setLight] = useState('red');

  useEffect(() => {
    const interval = handleLightChange(light, setLight);
    return () => clearTimeout(interval);
  }, [light]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <View style={{ width: 100, height: 100, borderRadius: 50, margin: 10, backgroundColor: light === 'red' ? 'red' : '#333' }} />
      <View style={{ width: 100, height: 100, borderRadius: 50, margin: 10, backgroundColor: light === 'yellow' ? 'yellow' : '#333' }} />
      <View style={{ width: 100, height: 100, borderRadius: 50, margin: 10, backgroundColor: light === 'green' ? 'green' : '#333' }} />
    </View>
  );
};

const handleLightChange = (light, setLight) => {
  const changeLight = () => {
    if (light === 'red') {
      setLight('green');
    } else if (light === 'green') {
      setLight('yellow');
    } else if (light === 'yellow') {
      setLight('red');
    }
  };

  let interval;
  if (light === 'red') {
    interval = setTimeout(changeLight, 4000);
  } else if (light === 'yellow') {
    interval = setTimeout(changeLight, 500);
  } else if (light === 'green') {
    interval = setTimeout(changeLight, 3000);
  }

  return interval;
};

export default TrafficLight;
