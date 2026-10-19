//new 


import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

const App = () => {
  const [filter, setFilter] = useState('All');

  const data = [
    {id: 1, txnType: 'credit', amount: '$200', date: '20-10-2026'},
    {id: 2, txnType: 'debit', amount: '$100', date: '19-10-2026'},
    {id: 3, txnType: 'credit', amount: '$500', date: '18-10-2026'},
  ];

  const filteredData = data.filter(
    item => filter === 'All' || item.txnType === filter,
  );

  return (
    <View style={{flex: 1, padding: 20}}>

      {/* Tabs */}
      <View style={{flexDirection: 'row'}}>
        {['All', 'credit', 'debit'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setFilter(tab)}
            style={{
              flex: 1,
              padding: 12,
              alignItems: 'center',
              backgroundColor: filter === tab ? 'skyblue' : 'lightgrey',
            }}>
            <Text>{tab.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Transactions */}
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{padding: 15, borderBottomWidth: 1}}>
            <Text>ID: {item.id}</Text>
            <Text>Type: {item.txnType}</Text>
            <Text>Amount: {item.amount}</Text>
            <Text>Date: {item.date}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No transactions found</Text>}
      />
    </View>
  );
};

export default App;