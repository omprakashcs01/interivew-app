import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

function Cell({filled, onClick, isDisabled, label}) {
  return (
    <TouchableOpacity
      accessibilityLabel={label}
      disabled={isDisabled}
      onPress={onClick}
      style={[styles.cell, filled ? styles.cellActivated : null]}
    />
  );
}

export default function App() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];

  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder(origOrder => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };

  const activateCells = index => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    // deactivate
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.grid}>
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              label={`Cell ${index}`}
              filled={order.includes(index)}
              onClick={() => activateCells(index)}
              isDisabled={order.includes(index) || isDeactivating}
            />
          ) : (
            <View key={index} style={styles.emptyCell} />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 156, // Adjust to fit the exact layout
    height: 156, // Adjust to fit the exact layout
  },
  cell: {
    width: 50,
    height: 50,
    margin: 1,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellActivated: {
    backgroundColor: 'green',
  },
  emptyCell: {
    width: 50,
    height: 50,
    margin: 1,
    borderWidth: 1,
    borderColor: '#000',
  },
});
