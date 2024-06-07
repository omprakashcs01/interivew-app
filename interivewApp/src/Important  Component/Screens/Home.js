import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  dd,
} from 'react-native';
import SearchUI from '../Search/SearchUI';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dataAPI, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  //   const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=50';
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setData(data);
      setFilteredData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = search => {
    setSearchTerm(search);
    filterSearch(search);
  };

  const filterSearch = search => {
    const filtered = dataAPI.filter(
      item =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toString().includes(search.toLowerCase()),
    );
    setFilteredData(filtered);
    // updateSuggestions(search);
  };

  //auto suggest

  //   const updateSuggestions = search => {
  //     const suggestions = dataAPI
  //       .filter(
  //         item =>
  //           item.title.toLowerCase().includes(search.toLowerCase()) ||
  //           item.id.toString().includes(search.toLowerCase()),
  //       )
  //       .map(item => item.title);
  //     setSuggestions(suggestions);
  //   };

  const handleSelectSuggestion = suggestion => {
    setSearchTerm(suggestion);
    filterSearch(suggestion);
  };

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={handleSearch}
        placeholder="Search by ID, Name, or Title"
      />
      <FlatList
        data={filteredData}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.id}>ID: {item.id}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  searchInput: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  id: {
    fontSize: 14,
    color: '#888',
  },
});
