import React from 'react';
import { StyleSheet, Text, View, Image, LogBox } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProductDetails = () => {
  const route = useRoute();
  const imageUrl = route.params.data?.image; // Access image property safely

  return (
    <View>
      {imageUrl ? ( // Check if imageUrl is not null or undefined
        <Image style={{ height: 100, width: 100 }} source={{ uri: imageUrl }} />
      ) : (
        <Text>No image available</Text>
      )}
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
