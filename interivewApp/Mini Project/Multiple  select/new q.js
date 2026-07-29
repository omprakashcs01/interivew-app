import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // Single selected item

  const fetchData = async () => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let dataAPI = await response.json();
      setData(dataAPI);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleSelect = id => {
    // If the same item is clicked, deselect it; otherwise, select the new item
    setSelectedItem(prev => (prev === id ? null : id));
  };

  return (
    <View>
      <Text style={{textAlign: 'center', marginVertical: 10}}>
        Single Select
      </Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          const isSelected = selectedItem === item.id; // Check if this item is selected

          return (
            <View>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  padding: 10,
                  marginBottom: 5,
                  backgroundColor: isSelected ? 'blue' : 'white',
                }}
                onPress={() => toggleSelect(item.id)}>
                <Text style={{color: isSelected ? 'white' : 'black'}}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
