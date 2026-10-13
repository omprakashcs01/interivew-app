import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const PracticePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async pageNum => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${pageNum}`,
      );
      const responseData = await response.json();
      if (responseData.results.length > 0) {
        setData(prevData => [...prevData, ...responseData.results]);
        setPage(pageNum + 1);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, []);

  const loadMore = () => {
    if (!loading) {
      fetchData(page);
    }
  };

  const renderFooter = () => {
    return loading ? (
      <ActivityIndicator size={'large'} color={'#0000ff'} />
    ) : null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.itemContainer}>
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default PracticePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 10,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 8,
    marginBottom: 10,
  },
  contentContainer: {
    paddingBottom: 20,
  },
});
