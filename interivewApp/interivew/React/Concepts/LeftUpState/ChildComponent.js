import React, { useEffect } from 'react';
import { TouchableOpacity, Text, Vibration } from 'react-native';

export default function ChildComponent({ sendDataToParent }) {
    const sendData = () => {
        const dataToSend = "Hello from child!";
        sendDataToParent(dataToSend);
    };

    return (
        <TouchableOpacity onPress={sendData}>
            <Text>Send Data to Parent</Text>
        </TouchableOpacity>
    );
}


