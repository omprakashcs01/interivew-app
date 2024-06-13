import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {fakeData} from '../data/data';
import SearchUI from '../../../src/Important  Component/Search/SearchUI';
import axios from 'axios';

const BasicFlatList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState('https://rickandmortyapi.com/api/character');

  const fetchAPI = async () => {
    setLoading(true);
    const response = await axios.get(next);
    setData(response.data.results);
    setNext(response.data.info.next);
    setLoading(false);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  if (loading && data.length === 0) {
    return <ActivityIndicator />;
  }

  const loadMore = async () => {
    if (!next) return; // If there's no next URL, don't attempt to load more
    setLoading(true);
    const response = await axios.get(next);
    setData(prevData => [...prevData, ...response.data.results]);
    setNext(response.data.info.next);
    setLoading(false);
  };

  return (
    <View style={{flex: 1}}>
      <SearchUI />
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={{flex: 1}}>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{aspectRatio: 1, width: '100%'}}
                  source={{uri: item.image}}
                />
                <Text style={{fontWeight: '800', fontSize: 20}}>
                  {item.name}
                </Text>
              </View>
            </View>
          );
        }}
        contentContainerStyle={{gap: 10}}
        ListFooterComponent={() => {
          return (
            <View>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Text
                  style={{fontSize: 20, alignItems: 'center'}}
                  onPress={loadMore}>
                  Load more
                </Text>
              )}
              <Text>{next}</Text>
            </View>
          );
        }}
        onEndReached={loadMore}
      />
    </View>
  );
};

export default BasicFlatList;

const styles = StyleSheet.create({});
