import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomTab from './src/components/CustomTab';

const TransactionsPage = () => {
  const [filter, setFilter] = useState('All');

  const data = [
    {
      id: 42,
      date: '30-01-2019',
      txnType: 'credit',
      amount: '$2,084.06',
      location: {
        id: 6,
        address: '206, Portaline, Brooklyn Avenue',
        city: 'Brownlee',
        zipCode: 80358,
      },
    },
    {
      id: 2,
      date: '30-01-2019',
      txnType: 'debit',
      amount: '$2,084.06',
      location: {
        id: 6,
        address: '206, Portaline, Brooklyn Avenue',
        city: 'Brownlee',
        zipCode: 80358,
      },
    },
    // Add more transactions here
  ];

  const filteredTransactions = () => {
    const filteredData = data.filter(
      item => item.txnType === filter || filter === 'All',
    );
    return filteredData;
  };

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <CustomTab text={'Result '} onPress={() => setFilter('All')} />
        <CustomTab text={'Credit'} onPress={() => setFilter('credit')} />
        <CustomTab text={'Debit'} onPress={() => setFilter('debit')} />
      </View>
      <FlatList
        data={filteredTransactions()}
        renderItem={({item}) => (
          <View>
            <Text>ID: {item.id}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Type: {item.txnType}</Text>
            <Text>Amount: {item.amount}</Text>
            <Text>
              Location: {item.location.address}, {item.location.city},{' '}
              {item.location.zipCode}
            </Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TransactionsPage;

const styles = StyleSheet.create({});
