import React, {useState} from 'react';
import {View, Text, FlatList, Button} from 'react-native';

const products = [
  {id: 1, name: 'T-Shirt', price: 499},
  {id: 2, name: 'Shoes', price: 1499},
  {id: 3, name: 'Jeans', price: 999},
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      setCart(prev =>
        prev.map(item =>
          item.id === product.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      );
    } else {
      setCart(prev => [...prev, {...product, quantity: 1}]);
    }
  };

  const decreaseQuantity = id => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id ? {...item, quantity: item.quantity - 1} : item,
        )
        .filter(item => item.quantity > 0),
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const renderProduct = ({item}) => (
    <View style={{padding: 10}}>
      <Text>
        {item.name} - ₹{item.price}
      </Text>
      <Button title="Add to Cart" onPress={() => addToCart(item)} />
    </View>
  );

  const renderCartItem = ({item}) => (
    <View style={{padding: 10}}>
      <Text>
        {item.name} x {item.quantity}
      </Text>
      <Button title="+" onPress={() => addToCart(item)} />
      <Button title="-" onPress={() => decreaseQuantity(item.id)} />
    </View>
  );

  return (
    <View style={{flex: 1, padding: 20}}>
      <Text>Products</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProduct}
      />

      <Text>My Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={item => item.id.toString()}
        renderItem={renderCartItem}
      />

      <Text>Total: ₹{total}</Text>
    </View>
  );
};

export default ShoppingCart;
