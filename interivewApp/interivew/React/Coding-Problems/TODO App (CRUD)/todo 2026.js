import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const handleAddTodo = () => {
    if (!todo.trim()) return;
    let newTodo = {
      id: Date.now().toString(),
      name: todo,
    };

    setTodoList([...todoList, newTodo]);
    setTodo('');
  };

  const handleDelete = (id) => {
    let updateList = todoList.filter((item) => item.id !== id);

    setTodoList(updateList);
  };

  const handleEdit = (item) => {
    setTodo(item.name);
    setEditTodo(item);
  };

  const handleUpdtae = () => {
    if (!todo.trim()) return;

    const updateTodoList = todonList.map((item) => {
      if (item.id === editTodo.id) {
        return { ...item, name: todo };
      }
      return item;
    });

    setTodoList(updateTodoList);
    setTodo('');
    setEditTodo(null);
  };

  const handlelList = ({ item }) => {
    return (
      <View
        style={{
          alignItems: 'center',
          margin: 20,
          padding: 10,
          flexDirection: 'row',
        }}>
        <Text style={{ flex: 1 }}>{item.name}</Text>

        <TouchableOpacity
          style={{ marginHorizontal: 10 }}
          onPress={() => handleEdit(item)}>
          <Text style={{ color: 'blue' }}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginHorizontal: 10 }}
          onPress={() => handleDelete(item.id)}>
          <Text style={{ color: 'red' }}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          marginHorizontal: 15,
          margin: 20,
          borderRadius: 10,
        }}
        placeholder="Enter your  Task"
        value={todo}
        onChangeText={setTodo}
      />

      <TouchableOpacity
        style={{
          padding: 10,
          alignItems: 'center',
          backgroundColor: 'black',
          marginHorizontal: 50,
          borderRadius: 10,
        }}
        onPress={editTodo ? handleUpdtae : handleAddTodo}>
        <Text style={{ color: 'white' }}> {editTodo? "update": "Add Task"} </Text>
      </TouchableOpacity>
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={handlelList}
      />
    </View>
  );
};

export default Todo;
