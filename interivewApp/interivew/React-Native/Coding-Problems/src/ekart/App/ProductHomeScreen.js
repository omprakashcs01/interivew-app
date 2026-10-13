import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Searchbar} from 'react-native-paper';

const data = [
  {
    id: '01',
    title: 'Mobile',
    description: 'Good Mobile with ultra responsive display',
    image:
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '02',
    title: 'Laptop',
    description: 'New Laptop with ultra responsive display',
    image:
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const ProductHomeScreen = () => {
  const [products, setProducts] = useState([]);

  const navigation =useNavigation()

  console.log('products =>>>', products);

  async function fetchData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log('products =>>>',data);
      setProducts(data);
      // Handle data
    } catch (error) {
      console.log('products =>>>',error);
      // Handle error
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  ////////////////////////////////////////
  return (
    <View style={{flex: 1}}>
      <Searchbar style={{marginTop: 10, borderWidth: 1}} placeholder="Search" />
      <FlatList
        data={products}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={()=> navigation.navigate("ProductDetails", {data: item})}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 10,
                width: '100%',
                height: 100,
               

                flexDirection: 'row',
              }}>
              <Image
                style={{height: 100, width: 100}}
                source={{uri: item.image}}
              />
            <View style={{}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  {item.title.length > 30
                    ? item.title.substring(0, 30) + '...'
                    : item.title}
                </Text>
                <Text style={{fontSize: 14, marginTop: 10}}>
                  {item.description.length > 30
                    ? item.description.substring(0, 30) + '...'
                    : item.description}
                </Text>

                <Text style={{fontSize: 14, fontWeight: '800', marginTop: 10, marginLeft: 10 , color: 'green'}}>
                  {`$` + item.price}   { `⭐` +item.rating.rate}
                </Text>
              
              </View>
            </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ProductHomeScreen;

const styles = StyleSheet.create({});
