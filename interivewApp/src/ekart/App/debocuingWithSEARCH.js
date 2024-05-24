import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, ActivityIndicator } from 'react-native';

const MyComponent = () => {
  const [text, setText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const searchApi = async (searchTerm) => {
    try {
      if (!searchTerm) {
        setSearchResults([]);
        return; // Don't make API call if search term is empty
      }
      setIsLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedSearchApi = debounce(searchApi, 1000);

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.id}</Text>
    </View>
  );

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={(inputValue) => {
          setText(inputValue);
          debouncedSearchApi(inputValue);
        }}
        placeholder="Search..."
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default MyComponent;
