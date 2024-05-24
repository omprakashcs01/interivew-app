import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import fetchData from './fetchData';
import { debounce } from '../debounce fn/debounce';

// function debounce(func, wait) {
//   let timeout;
//   return function executedFunction(...args) {
//     const later = () => {
//       clearTimeout(timeout);
//       func(...args);
//     };
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   };
// }

const SearchScreen = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [apiCallsCount, setApiCallsCount] = useState(0);

  // const debouncedHandleSearch = debounce(handleSearch, 500);

  // console.log('search=>>>>>>>', searchTerm);

  // console.log('API DATA=>>>>>>>', data);

  const filterSearch = () => {
    let filterData = data.filter(item => {
      return (
        item.id.toString().includes(searchTerm) ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    return filterData;
  };

  const handleSearch = async () => {
    setApiCallsCount(prevCount => prevCount + 1);
    const data = await fetchData();

    setData(data);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  
  const filteredData = filterSearch();
  console.log('API Calls Count:', apiCallsCount);

  const debouncedHandleSearch = useCallback(debounce(handleSearch, 300), []);
  return (
    <View style={{flex: 1}}>
      <TextInput
        style={{
          borderWidth: 1,
          marginHorizontal: 20,
          marginTop: 20,
          borderRadius: 15,
          paddingHorizontal: 10,
        }}
        placeholder="Search...."
        value={searchTerm}
        onChangeText={text => {
          setSearchTerm(text);
          debouncedHandleSearch();
        }}
        // onSubmitEditing={debouncedHandleSearch}
      />

      <FlatList
        data={filteredData}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
