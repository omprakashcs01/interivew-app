import {Alert, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchUI from '../../src/Important  Component/Search/SearchUI';
import {fakeData} from './data/data';

const LoadMore = () => {
  return (
    <View style={{flex: 1}}>
      <SearchUI />

      <FlatList
        data={fakeData.results}
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
        // ListFooterComponent={() => {
        //   return (
        //     <View>
        //       <Text style={{alignSelf: 'center', fontSize: 20, color: 'blue'}}>
        //         {nextPage}
        //       </Text>
        //     </View>
        //   );
        // }}
      />
    </View>
  );
};

export default LoadMore;

const styles = StyleSheet.create({});
