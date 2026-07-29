import {FlatList, LogBox, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomSearchBar from './Mini Project/SeacrhWithDecounce/CustomSearchBar';

const PracticePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  console.log(searchTerm);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const responseData = await response.json();
    setData(responseData);
  };

  const filterDataItem = text => {
    const filterData = data.filter(item => {
      return (
        item.id.toString().includes(text) ||
        item.title.toLowerCase().includes(text.toLowerCase())
      );
    });

    setFilteredData(filterData);
    return filterData;
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = text => {
    setSearchTerm(text);
    filterDataItem(text);
  };
  return (
    <View>
      <CustomSearchBar
        value={searchTerm}
        onChangeText={text => handleSearch(text)}
      />

      {searchTerm.trim().length > 0 && (
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
      )}
    </View>
  );
};

export default PracticePage;

const styles = StyleSheet.create({});
