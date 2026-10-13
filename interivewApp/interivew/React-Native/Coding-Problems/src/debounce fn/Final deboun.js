import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import CustomSearchBar from './MiniProject/SearchWithDebounce/CustomSearchBar';

const PracticePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const fetchData = async (query = '') => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?q=${query}`,
    );
    const data = await response.json();
    setData(data);
  };

  const handleSearch = txt => {
    setSearchTerm(txt);
    myDebouncedFetch(txt);
  };

  const filterSearchTerm = () => {
    return data.filter(item => {
      return (
        item.id.toString().includes(searchTerm) ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  const filteredData = filterSearchTerm();

  // Debounce function encapsulated in useCallback
  const myDebouncedFetch = useCallback(debounce(fetchData, 500), []);

  return (
    <View style={{flex: 1}}>
      <CustomSearchBar
        value={searchTerm}
        onChangeText={text => handleSearch(text)}
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{flex: 1, padding: 10}}>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PracticePage;

const styles = StyleSheet.create({});
