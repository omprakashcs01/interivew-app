import React from 'react';
import {View, Text, Component, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export class LearnClass extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {count: 0};
  }

  increment = () => {
    this.setState(privisons => ({
      count: privisons.count + 1,
    }));
  };
  decrement = () => {
    this.setState(privisons => ({
      count: privisons.count - 1,
    }));
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 50,
          margin: 110,
        }}>
        <Button
          title="+"
          onPress={() => {
            this.increment();
          }}
        />
        <Text style={{fontSize: 20}}>test {this.state.count}</Text>
        <Button
          title="-"
          onPress={() => {
            this.decrement();
          }}
        />
      </View>
    );
  }
}
