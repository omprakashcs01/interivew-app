import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomSearchBar from './CustomSearchBar';
import axios from 'axios';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [flitteredData, setFilteredData] = useState([]);

  console.log(data);
  const fetchApi = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');

    setData(response.data);
    setFilteredData(response.data);
  };

  const handleSearch = text => {
    setSearchTerm(text);
    filterData(text);
  };

  const filterData = text => {
    const trimmedSearchTerm = text.trim().toLowerCase();
    if (trimmedSearchTerm === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => {
        const itemId = item.id.toString().toLowerCase();
        const itemTitle = item.title.toLowerCase();
        return (
          itemId.includes(trimmedSearchTerm) ||
          itemTitle.includes(trimmedSearchTerm)
        );
      });
      setFilteredData(filtered);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  //search  //
  //   useEffect(() => {
  //     filterSearch();
  //   }, [searchTerm, data]);

  const fakeData = [
    {
      id: '1',
      name: 'Om',
    },
    {
      id: '2',
      name: 'deep',
    },
    {
      id: '3',
      name: 'raj',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 20}}>
        <CustomSearchBar value={searchTerm} onChangeText={handleSearch} />
      </View>
      <FlatList
        data={flitteredData}
        renderItem={({item}) => {
          return (
            <View style={{flex: 1}}>
              <View
                style={{
                  padding: 10,

                  marginVertical: 20,
                  marginHorizontal: 50,
                  borderRadius: 10,
                  paddingLeft: 15,
                  flexDirection: 'row',
                  paddingLeft: 10,
                  borderWidth: 1,
                  //
                  borderColor: '#ccc',
                  backgroundColor: '#fff',
                  elevation: 5,
                }}>
                <Text style={{fontSize: 18, textAlign: 'left'}}>{item.id}</Text>
                <Text style={{fontSize: 20, paddingLeft: 5}}>{item.title}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
