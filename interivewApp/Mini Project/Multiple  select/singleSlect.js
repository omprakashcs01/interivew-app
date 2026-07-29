import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const PracticePage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    {
      id: '1',
      title: 'Item 1',
    },
    {
      id: '2',
      title: 'Item 2',
    },
    {
      id: '3',
      title: 'Item 3',
    },
  ];

  const handlePress = item => {
    setSelectedItem(item.id);
  };

  const handleItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handlePress(item)}
        style={{
          padding: 10,
          backgroundColor: selectedItem === item.id ? 'lightblue' : 'white',
        }}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={handleItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default PracticePage;

const styles = StyleSheet.create({});
