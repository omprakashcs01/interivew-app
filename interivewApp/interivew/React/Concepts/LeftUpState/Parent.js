import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
    const [receivedData, setReceivedData] = useState('');

    const receiveDataFromChild = (data) => {
        setReceivedData(data);
        // You can perform any other actions with the received data here
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Received Data: {receivedData}</Text>
            <ChildComponent sendDataToParent={receiveDataFromChild} />
        </View>
    );
}
