// App.js
import React, {useState} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';

// Sample data
const sampleData = [
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

// Header component
const Header = ({filter, setFilter}) => (
  <View style={styles.headerContainer}>
    <Button title="All" onPress={() => setFilter('all')} testID="all-button" />
    <Button
      title="Credit"
      onPress={() => setFilter('credit')}
      testID="credit-button"
    />
    <Button
      title="Debit"
      onPress={() => setFilter('debit')}
      testID="debit-button"
    />
  </View>
);

// TransactionItem component
const TransactionItem = ({transaction}) => (
  <View style={styles.itemContainer} testID="transaction-item">
    <Text style={styles.text} testID="address">
      {transaction.location.address}
    </Text>
    <Text style={styles.text} testID="city">
      {transaction.location.city}
    </Text>
    <Text style={styles.text} testID="amount">
      {transaction.amount}
    </Text>
    <Text style={styles.text} testID="date">
      {transaction.date}
    </Text>
  </View>
);

// Transactions component
const Transactions = () => {
  const [filter, setFilter] = useState('all');

  const filteredTransactions = sampleData.filter(
    transaction => filter === 'all' || transaction.txnType === filter,
  );

  return (
    <View style={styles.container}>
      <Header filter={filter} setFilter={setFilter} />
      <FlatList
        data={filteredTransactions}
        renderItem={({item}) => <TransactionItem transaction={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
});

// Main App component
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Transactions />
    </View>
  );
};

export default App;
