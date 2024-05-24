import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, ActivityIndicator } from 'react-native';

const MyComponent = () => {
  const [text, setText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Define the debounce function
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

  // Debounce the search API call
  const searchApi = async (searchTerm) => {
    try {
      setIsLoading(true);
      // Simulating an API call with setTimeout
      setTimeout(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`);
        const data = await response.json();
        console.log("data=>>", data);
        setSearchResults(data.results);
        setIsLoading(false);
      }, 1000); // Simulating 1 second delay for debounce
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const debouncedSearchApi = debounce(searchApi, 1000); // 1000 milliseconds debounce time

  const renderItem = ({ item }) => (
    <Text>{item.title}</Text>
    // Adjust the rendering based on your data structure
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
