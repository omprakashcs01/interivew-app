import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const transactionsData = [
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
    id: 42,
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
  // Add more transactions here
];

const Transactions = () => {
  const [filterType, setFilterType] = useState('all');

  const filteredTransactions = transactionsData.filter(txn => {
    if (filterType === 'all') return true;
    return txn.txnType === filterType;
  });

  return (
    <View style={styles.container}>
      <Header filterType={filterType} setFilterType={setFilterType} />
      <FlatList
        data={filteredTransactions}
        renderItem={({item}) => <TransactionItem transaction={item} />}
        keyExtractor={item => item.id.toString()}
        testID="transactions-list"
      />
    </View>
  );
};

const TransactionItem = ({transaction}) => {
  return (
    <View style={styles.transactionItem}>
      <Text testID="address">{transaction.location.address}</Text>
      <Text testID="city">{transaction.location.city}</Text>
      <Text testID="amount">{transaction.amount}</Text>
      <Text testID="date">{transaction.date}</Text>
    </View>
  );
};

const Header = ({filterType, setFilterType}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => setFilterType('all')}
        testID="all-button">
        <Text>All</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setFilterType('credit')}
        testID="credit-button">
        <Text>Credit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setFilterType('debit')}
        testID="debit-button">
        <Text>Debit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  transactionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Transactions;
