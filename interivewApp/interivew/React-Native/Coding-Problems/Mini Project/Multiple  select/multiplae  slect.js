import React, {useState} from 'react';
import {FlatList, TouchableOpacity, Text, View} from 'react-native';

const MultiSelectList = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const data = [
    {id: '1', value: 'Item 1'},
    {id: '2', value: 'Item 2'},
    {id: '3', value: 'Item 3'},
  ];

  const handlePress = item => {
    setSelectItem(prevSelected =>
      prevSelected.includes(item.id)
        ? prevSelected.filter(i => i !== item.id)
        : [...prevSelected, item.id],
    );
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => handlePress(item)}
      style={{
        padding: 10,
        backgroundColor: selectedItems.includes(item.id)
          ? 'lightblue'
          : 'white',
      }}>
      <Text>{item.value}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default MultiSelectList;
