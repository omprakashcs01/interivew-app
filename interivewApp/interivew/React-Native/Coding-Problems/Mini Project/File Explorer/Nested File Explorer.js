
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const data = {
  name: 'Root',
  isFolder: true,
  items: [
    {
      name: 'public',
      isFolder: true,
      items: [
        { name: 'index.html', isFolder: false },
      ],
    },
    {
      name: 'src',
      isFolder: true,
      items: [
        {
          name: 'components',
          isFolder: true,
          items: [
            { name: 'Header.js', isFolder: false },
          ],
        },
        { name: 'App.js', isFolder: false },
        { name: 'index.js', isFolder: false },
      ],
    },
    { name: 'package.json', isFolder: false },
  ],
};

const Explorer = ({ data }) => {
  const [expand, setExpand] = useState(false);

  return (
    <View style={{ marginLeft: 20, marginTop: 8 }}>
      <TouchableOpacity
        onPress={() => {
          if (data.isFolder) {
            setExpand(!expand);
          }
        }}
      >
        <Text style={{ fontSize: 16 }}>
          {data.isFolder
            ? expand ? '📂' : '📁'
            : '📄'}{' '}
          {data.name}
        </Text>
      </TouchableOpacity>

      {data.isFolder && expand && (
        <View>
          {data.items?.map((item, index) => (
            <Explorer key={index} data={item} />
          ))}
        </View>
      )}
    </View>
  );
};

const App = () => {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Explorer data={data} />
    </ScrollView>
  );
};

export default App;
