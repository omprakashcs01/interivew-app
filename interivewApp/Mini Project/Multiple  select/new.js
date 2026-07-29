// App.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const App = () => {
  // Store users and selected users
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Fetch users when app starts
  useEffect(() => {
    getUsers();
  }, []);

  // Function to get users from API
  const getUsers = async () => {
    try {
      const response = await fetch('https://dummyapi.online/api/users');
      const json = await response.json();
      setUsers(json.data || json);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  // Function to handle user selection
  const handleSelect = (userId) => {
    if (selectedUsers.includes(userId)) {
      // If user is already selected, remove them
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      // If user is not selected, add them
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      
      {/* Show number of selected users */}
      <Text style={styles.subtitle}>
        Selected users: {selectedUsers.length}
      </Text>

      {/* List of users */}
      <ScrollView>
        {users.map(user => (
          <TouchableOpacity
            key={user.id}
            onPress={() => handleSelect(user.id)}
            style={[
              styles.userBox,
              selectedUsers.includes(user.id) && styles.selectedBox
            ]}
          >
            <Text>
              {user.firstName} {user.lastName}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

// Simple styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  userBox: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  selectedBox: {
    backgroundColor: '#e6e6e6',
  },
});

export default App;