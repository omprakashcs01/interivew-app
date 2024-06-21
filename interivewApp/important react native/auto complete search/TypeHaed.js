import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Typeahead = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async searchQuery => {
    if (!searchQuery) {
      setData(mockData);
      return;
    }

    setLoading(true);
    try {
      // Simulate API call with setTimeout
      setTimeout(() => {
        const mockData = [
          {id: 1, name: 'Apple'},
          {id: 2, name: 'Banana'},
          {id: 3, name: 'Cherry'},
          {id: 4, name: 'Date'},
          {id: 5, name: 'Elderberry'},
        ];
        const filteredData = mockData.filter(item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        setData(filteredData);
        setLoading(false);
      }, 1000); // Simulating a delay of 1 second
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleSearch = text => {
    setQuery(text);
    fetchData(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={handleSearch}
      />
      {loading && <Text>Loading...</Text>}
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => alert(`Selected: ${item.name}`)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Typeahead;
