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



///new 
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import React, { useState, useEffect, useMemo } from 'react';

// const MOCK  =[
//   {id: 1, name: "apple"},
//   {id:2, name: "banana"},
//   {id:3, name:  papaya},
//   {id: 4, name: graps}
// ]


const debounce = (fn, dealy)=>{
  let timer 
     
  return (...args)=>{
    clearTimeout(timer)
    timer= setTimeout(()=>{
      fn.apply(this, args)
    },dealy)
  }
}

const TypeHeadSearch = () => {
  const [query, setQurey] = useState('');
  const [data, setData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  
 const debounceSearch = useMemo(
  () =>
    debounce(text => {
      setSearchQuery(text);
    }, 500),
  [],
);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      let newData = await response.json();
      setData(newData);
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (text) => {
    setQurey(text);
    setShowSuggestions(true);
    debounceSearch(text)
   
  };

  const filterData =
    searchQuery.trim().length > 0
      ? data.filter((item) => {
          return item.title.toLowerCase().includes(searchQuery.toLowerCase());
        })
      : [];

  const handleSelect = (item) => {
    setQurey(item.title);
    setShowSuggestions(false);
  };

  return (
    <View>
      <TextInput
        style={{ borderWidth: 1, padding: 10, margin: 20 }}
        value={query}
        onChangeText={handleSearch}
        placeholder="search...."
      />
      {searchQuery.trim().length > 0 &&
        showSuggestions &&
        filterData.length === 0 && <Text> no result</Text>}
      {loading && <Text>Loading...</Text>}

      {error.length > 0 && <Text>{error}</Text>}
      <FlatList
        data={showSuggestions ? filterData : []}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity onPress={() => handleSelect(item)}>
                <Text>{item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TypeHeadSearch;

