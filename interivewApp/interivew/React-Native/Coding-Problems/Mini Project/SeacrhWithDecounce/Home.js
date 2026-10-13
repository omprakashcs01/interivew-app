import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomSearchBar from './CustomSearchBar';
import axios from 'axios';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setData(response.data);
    setFilteredData(response.data);
  };

  const handleSearch = text => {
    setSearchTerm(text);
    filterData(text);
    addDebounce(text);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  //search  //
  //   useEffect(() => {
  //     filterSearch();
  //   }, [searchTerm, data]);

  const filterData = text => {
    const searchTermTrim = text.trim().toLowerCase();
    if (searchTermTrim === '') {
      setFilteredData(data);
    } else {
      const filterSearchItems = data.filter(item => {
        const searchByName = item.title.toLowerCase();
        const searchByID = item.id.toString().toLowerCase();
        return (
          searchByName.includes(searchTermTrim) ||
          searchByID.includes(searchTermTrim)
        );
      });
      setFilteredData(filterSearchItems);
    }
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
      return timer;
    };
  };

  const addDebounce = debounce(filterData, 1);

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
        data={filteredData}
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
