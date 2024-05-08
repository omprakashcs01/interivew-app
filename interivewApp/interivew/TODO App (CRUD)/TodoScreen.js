import {
    FlatList,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    Touchable,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import {Icon, IconButton, TextInput} from 'react-native-paper';
  
  const data = [
    {id: 1, name: 'John Doe', title: 'Software Engineer'},
    {id: 2, name: 'Jane Smith', title: 'Data Analyst'},
    {id: 3, name: 'Michael Johnson', title: 'Project Manager'},
    {id: 4, name: 'Emily Brown', title: 'Graphic Designer'},
    {id: 5, name: 'David Wilson', title: 'Marketing Specialist'},
    {id: 6, name: 'Sarah Anderson', title: 'HR Coordinator'},
    {id: 7, name: 'Robert Martinez', title: 'Accountant'},
    {id: 8, name: 'Maria Garcia', title: 'Sales Representative'},
    {id: 9, name: 'James Thompson', title: 'Operations Manager'},
    {id: 10, name: 'Laura Davis', title: 'Customer Support Specialist'},
  ];
  
  const HomePage = () => {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [editTodo, setEditedTodo] = useState(null);
  
    const handleAddTodo = () => {
      if (todo === '') {
        return; // early return
      }
  
      setTodoList([...todoList, {id: Math.random().toString(), name: todo}]);
      setTodo('');
    };
  
    const handleDeleteTodo = id => {
      const updatedTodo = todoList.filter(item => item.id !== id);
  
      setTodoList(updatedTodo);
    };
  
    const handleEditTodo = item => {
      console.log(item);
      setEditedTodo(item);
  
      setTodo(item.name);
    };
  
    const handleUpdate = item => {
      const updatedTodo = todoList.map(item => {
        if (item.name === editTodo.name) {
          return {...item, name: todo};
        }
  
        return item;
      });
  
      setTodoList(updatedTodo);
      setEditedTodo(null);
      setTodo('');
    };
  
    return (
      <View style={{marginTop: 60, marginVertical: 35, marginHorizontal: 30}}>
        <View>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 6,
              paddingVertical: 5,
              paddingHorizontal: 50,
            }}
            placeholder="Add A task"
            value={todo}
            onChangeText={userText => setTodo(userText)}
          />
        </View>
        {editTodo ? (
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              paddingVertical: 20,
              marginTop: 20,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 60,
            }}
            onPress={handleUpdate}>
            <Text style={{color: 'white', fontSize: 20}}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              paddingVertical: 20,
              marginTop: 20,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 60,
            }}
            onPress={handleAddTodo}>
            <Text style={{color: 'white', fontSize: 20}}>Add Notes</Text>
          </TouchableOpacity>
        )}
  
        <FlatList
          data={todoList}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  backgroundColor: '#1e90ff',
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                  borderRadius: 10,
                  marginVertical: 10,
                  flexDirection: 'row',
                }}>
                <Text style={{fontSize: 25, flex: 1}}>{item.name}</Text>
  
                <IconButton icon="pencil" onPress={() => handleEditTodo(item)} />
                <IconButton
                  icon="delete"
                  onPress={() => handleDeleteTodo(item.id)}
                />
              </View>
            );
          }}
        />
      </View>
    );
  };
  
  export default HomePage;
  
  const styles = StyleSheet.create({});
  