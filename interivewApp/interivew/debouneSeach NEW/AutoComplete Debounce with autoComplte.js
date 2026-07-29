import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import CustomSearchBar from './Mini Project/SeacrhWithDecounce/CustomSearchBar';

const AutoComplete = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setData(data);
  };

  const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };

  const filterData = text => {
    const filterSearchItem = data.filter(item => {
      return (
        item.id.toString().includes(text.toLowerCase()) ||
        item.title.toLowerCase().includes(text.toLowerCase())
      );
    });
    setFilteredData(filterSearchItem);
  };

  const handleSearch = text => {
    setSearchTerm(text);
    debounceFilterData(text);
  };

  const debounceFilterData = useCallback(debounce(filterData, 5000), [data]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <CustomSearchBar
        value={searchTerm}
        onChangeText={text => handleSearch(text)}
      />
      {searchTerm.length > 0 ? (
        <FlatList
          data={filteredData}
          renderItem={({item}) => {
            return (
              <View style={{backgroundColor: 'grey', marginHorizontal: 50}}>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
      ) : null}
    </View>
  );
};

export default AutoComplete;

const styles = StyleSheet.create({});
