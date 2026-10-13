import {
    Alert,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import {IconButton, TextInput} from 'react-native-paper';

  
  
  
  const TodoPage = () => {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [editedTodo, setEditedTodoList] = useState(null);
  
    //Add todoList
    const handleAddTodo = () => {
      if (todo === '') return false;
      const AddTodo = [...todoList, {id: Math.random().toString(), name: todo}];
      console.log('AddTodo=>>', AddTodo);
      setTodoList(AddTodo);
      setTodo('');
    };
    //DeleteTodo
    const handleDeleteTodo = itemTodo => {
      const UpdatedTodoList = todoList.filter(item => item.id !== itemTodo);
  
      setTodoList(UpdatedTodoList);
    };
  
    //EditTodoList
    const handleEdit = item => {
      setTodo(item.name);
      setEditedTodoList(item);
    };
  
    //UpdateTodoList
  
    const handleUpdate = async() => {
      if (todo === '') return setEditedTodoList(null);
      const newUpdatedTodoList = todoList.map(item => {
        if (item.name === editedTodo.name) {
          return {
            ...item,
            name: todo,
          };
        }
        return item;
      });
      setTodoList(newUpdatedTodoList);
      setTodo('');
      setEditedTodoList(null);
    };
  
   
    return (
      <View>
        <TextInput
          style={{marginHorizontal: 20, marginTop: 50, borderWidth: 1}}
          placeholder="Add Task"
          value={todo}
          onChangeText={setTodo}
        />
  
        {editedTodo ? (
          <TouchableOpacity
            style={{
              marginTop: 20,
              borderRadius: 20,
              backgroundColor: 'black',
              paddingVertical: 20,
              marginHorizontal: 100,
  
              alignItems: 'center',
            }}
            onPress={handleUpdate}>
            <Text style={{fontSize: 20, color: 'white'}}>Update</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              marginTop: 20,
              borderRadius: 20,
              backgroundColor: 'black',
              paddingVertical: 20,
              marginHorizontal: 100,
  
              alignItems: 'center',
            }}
            onPress={handleAddTodo}>
            <Text style={{fontSize: 20, color: 'white'}}>Add Task</Text>
          </TouchableOpacity>
        )}
  
        <FlatList
          data={todoList}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  backgroundColor: '#1e90ff',
                  paddingVertical: 10,
                  marginTop: 15,
                  marginHorizontal: 20,
                  borderRadius: 10,
                  flexDirection: 'row',
                }}>
                <Text style={{fontSize: 20, marginLeft: 15, flex: 1}}>
                  {item.name}
                </Text>
                <IconButton icon="pencil" onPress={() => handleEdit(item)} />
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
  
  export default TodoPage;
  
  const styles = StyleSheet.create({});
  